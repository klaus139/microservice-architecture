import { genSalt } from "bcrypt"
import {CustomerRepository} from "../database"
import {Iuser, IuserLogin} from "./customer-service.dto"
import {GenerateSalt, GenaratePassword, GenarateSignature, FormData, ValidatePassword} from "../utils"


// BUISONESS LOGIC
class CustomerService{
    // REPOSITORY VARIABLE
    repository   
    // INITIALISING/IMPLEMENTING CONSTRUCTIOR HER TAKES CREATE AN OBJECT/INSTANCE OF THE REPOSITORY CLASS
    // IT GIVES US ACCESS  TO ALL FUNCTIONS DECLARED IN THE CLASS 
    constructor(){
        this.repository = new CustomerRepository()
    }

    /************************  SIGNUP ******************************/ 
    async SignUp(userInput:Iuser){
        const {email, password, phone} = userInput
        try {
            // THE CHECK EXITING CUSTOMER FUNCTION FROM THE REPOSITORY IS THEN CALLED BELOW
            const existingCustomer = await this.repository.FindCustomer(email)
            if(existingCustomer){
                throw new Error("User already exisit, kindly login")
            }

            // GENERATE SALT
            let salt = await GenerateSalt()

            // GENERATE PASSWORD
            let userPassword = await GenaratePassword(password, salt)

             // THE CREATE CUSTOMER FUNCTION FROM THE REPOSITORY IS THEN CALLED BELOW
            const customer = await this.repository.CreateCustomer({
                email,
                phone,
                password:userPassword, 
                salt,
                cart:[]
            })
            console.log(customer)

            // GENERATE SIGNATURE
            const createdCustomer = await this.repository.FindCustomer(email)
            if(createdCustomer){
                const payload={
                    email:createdCustomer.email,
                    id:createdCustomer._id
                }
                const token = await GenarateSignature(payload)

                return FormData({customer,token})
            }
               throw new Error("Error Occured")
            
        } catch (err) {
            throw new Error(`${err}`)
        }
    }

     /************************ LOGIN ******************************/ 
     async SignIn(userLogin:IuserLogin){
        const {email, password} = userLogin
        try {
             // THE CHECK EXITING CUSTOMER FUNCTION FROM THE REPOSITORY IS THEN CALLED BELOW
             const existingCustomer = await this.repository.FindCustomer(email)
             if(existingCustomer){
               const validPassword = await ValidatePassword(password, existingCustomer.password, existingCustomer.salt)
               if(validPassword) {

                // GENERATE SIGNATURE
                const payload={
                    email,
                    id:existingCustomer._id
                }
                const token = await GenarateSignature(payload)

                return FormData({id:existingCustomer._id, token})
               }
               throw new Error("Invalid Password")
             }
             throw new Error("Invalid Credentials")
            
        } catch (err) {
            throw new Error(`${err}`)
        }
    }
}

export default CustomerService