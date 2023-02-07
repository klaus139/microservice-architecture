// REPOSITORY COMMUNNICATE WITH THE DATABASE

import {ProductModel, IProduct} from "../models"

// THIS IS NOT REQ.BODY, IT IS JUST LIKE A PAYLOAD TO 
// WHAT IS EXPECTED TO BE SAVED TO THE DATABASE ON CREATE ACCOUNT
export class ProductRepository{
    async CreateProduct({ name,
        desc,
        banner,
        type,
        unit,
        price,
        available,
        suplier,}: IProduct){
        try {
            const product = await ProductModel.create({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier,
            })
            return product
        } catch (err) {
            console.log(err)
        }
    }
    // async FindCustomer(email:string){
    //     const customer = await CustomerModel.findOne({email})
    //     return customer
    // }
}