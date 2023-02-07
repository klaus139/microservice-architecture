import CustomerService from "../services/customerService"
import express, {Request, Response, NextFunction }  from "express"

export const Customer = (app:express.Application) =>{

    const service = new CustomerService()

        /************************  SIGNUP ******************************/ 

    app.post("/signup", async(req:Request, res:Response, next:NextFunction) =>{
        try {
            const {email, password, phone} = req.body

            // JOI VALIDATION CAN HAPPEN HERE BUT WE ARE SKIPPING IT 


            const data = await service.SignUp({email, password, phone})
            return res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    })

        /************************  LOGIN ******************************/ 
        app.post("/login", async(req:Request, res:Response, next:NextFunction) =>{
            try {
                const {email, password} = req.body
    
                // JOI VALIDATION CAN HAPPEN HERE BUT WE ARE SKIPPING IT 
    
    
                const data = await service.SignIn({email, password})
                return res.status(201).json({
                    Message:"Login Successful8",
                    data
                })
            } catch (err) {
                next(err)
            }
        })
}