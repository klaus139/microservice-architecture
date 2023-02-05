import ProductService from "../services/productService";
import express, {Request, Response, NextFunction} from "express";


export const Product = (app:express.Application) => {
    const service = new ProductService();
    app.post('/product/signup', async(req:Request, res:Response, next:NextFunction)=> {
        try{
            const {name,
                desc,
                banner,
                type,
                unit,
                price,
                avaialble,
                supplier
            } = req.body;
            //do your validation with joi here.........
            //i didnt here but you should when you do yours
            const data = await service.ProductCreate({
                name,
                desc,
                banner,
                type,
                unit,
                price,
                avaialble,
                supplier});
            res.status(201).json(data);

        }catch(err){
            next(err);
        }
    })

}