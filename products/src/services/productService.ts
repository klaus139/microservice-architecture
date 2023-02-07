import {ProductRepository} from "../database"
import {IProducts} from "./productService.dto"
import {FormData} from "../utils"

// BUISONESS LOGIC
class ProductService{
    // REPOSITORY VARIABLE
    repository   
    // INITIALISING/IMPLEMENTING CONSTRUCTIOR HER TAKES CREATE AN OBJECT/INSTANCE OF THE REPOSITORY CLASS
    // IT GIVES US ACCESS  TO ALL FUNCTIONS DECLARED IN THE CLASS 
    constructor(){
        this.repository = new ProductRepository()
    }
    async CreateProducts(productInput:IProducts){
        const { name,
            desc,
            banner,
            type,
            unit,
            price,
            available,
            suplier,} = productInput
        try {
        
             // THE CREATE PRODUCT FUNCTION FROM THE REPOSITORY IS THEN CALLED BELOW
            const product = await this.repository.CreateProduct({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier,
            })

            // const createdCustomer = await this.repository.FindCustomer(email)
            // if(createdCustomer){
            //     const payload={
            //         email:createdCustomer.email,
            //         id:createdCustomer._id
            //     }
            //     const token = await GenarateSignature(payload)

                return FormData({product})
            // }
            //    throw new Error("Error Occured")
            
        } catch (err) {
            throw new Error(`${err}`)
        }
    }
}

export default ProductService