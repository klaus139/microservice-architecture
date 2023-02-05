import { isConstructorDeclaration } from "typescript";
import { CustomerRepositiory } from "../database";
import { IUser } from "./customer-service.dto";
import { GeneratePassword, GenerateSalt, GenerateSignature, FormatData } from "../utils";

//Business logic
class CustomerService{
    repository
    constructor(){
        this.repository = new CustomerRepositiory();
    }
    async SignUp(userInput:IUser){
        const {email, password, phone} = userInput;
        try{
            const existingCustomer = await this.repository.FindCustomer({email});
            if(existingCustomer){
                throw new Error('Customer already exists');
            }

            // generate salt
            let salt = await GenerateSalt();
            // generate password
            let userPassword = await GeneratePassword(password, salt);
            // create customer
            const customer = await this.repository.CreateCustomer({email, password: userPassword, salt, phone});
            const token = await GenerateSignature({email});
            return FormatData({customer, token})

        }catch(err){
            throw new Error(`${err}`);
        }
    }
}

export default CustomerService;