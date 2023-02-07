import ProductService from "../services/productService"
import express, {Request, Response, NextFunction }  from "express"
import { userAuth } from "./middleware/auth"

export const Product = (app:express.Application) =>{

    const product = new ProductService()

    app.post("/create", userAuth, async(req:Request, res:Response, next:NextFunction) =>{
        try {
            const {name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier,} = req.body

            // JOI VALIDATION CAN HAPPEN HERE BUT WE ARE SKIPPING IT 


            const data = await product.CreateProducts({name,
                desc,
                banner,
                type,
                unit,
                price,
                available,
                suplier,})
            return res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    })
}