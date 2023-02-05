import { isConstructorDeclaration } from "typescript";
import { ProductRepositiory } from "../database";
import { IProductDTO } from "./product-service.dto";
import { GeneratePassword, GenerateSalt, GenerateSignature, FormatData } from "../utils";

//Business logic
class ProductService{
    repository
    constructor(){
        this.repository = new ProductRepositiory();
    }
    async ProductCreate(productInput:IProductDTO){
        const {name,
            desc,
            banner,
            type,
            unit,
            price,
            avaialble,
            supplier
        } = productInput;
        try{
            
            // create product
            const product = await this.repository.CreateProduct({name,
                desc,
                banner,
                type,
                unit,
                price,
                avaialble,
                supplier});
            // const token = await GenerateSignature({email});
            return FormatData(product)

        }catch(err:any){
            throw new Error(`${err}`);
        }
    }
}

export default ProductService;