import CustomerService from "../services/customerService";
import express, {Request, Response, NextFunction} from "express";


export const Customer = (app:express.Application) => {
    const service = new CustomerService();
    app.post('/customer/signup', async(req:Request, res:Response, next:NextFunction)=> {
        try{
            const {email, password, phone} = req.body;
            //do your validation with joi here.........
            //i didnt here but you should when you
            const data = await service.SignUp({email, password, phone});
            return res.status(201).json(data);

        }catch(err){
            next(err);
        }
    })

}