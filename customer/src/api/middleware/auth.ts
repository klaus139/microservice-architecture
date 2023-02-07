import { ValidateSignature } from "../../utils";

import express, {Request, Response, NextFunction} from "express"

const userAuth = async(req:Request, res:Response, next:NextFunction) => {
    const isAuthorised = await ValidateSignature(req)

    if(isAuthorised) {
        return next()
    }
    res.status(403).json({
        Error: "Not Authorised!!!"
    })
}