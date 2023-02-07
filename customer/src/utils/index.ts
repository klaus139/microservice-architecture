import {hash, genSalt} from "bcrypt"
import {sign, verify} from "jsonwebtoken"
import { APP_SECRET } from "../config"
import { Request } from "express"

// let APP_SECRET:"ragrrvtgcvytyfghbyvbhvstvrscgucvyxtgz"

export async function GenerateSalt() {
    return await genSalt()   
    // THIS GENERATE RANDOM SALT
}

export async function GenaratePassword(password:string, salt:string){
    // WE DESTRUCTURED HASH FROM BCRYPT
    return await hash(password, salt)
}

export async function ValidatePassword(enteredPassword:string, savedPassword:string, salt:string){
    return await  GenaratePassword(enteredPassword, salt) === savedPassword
}

export async function GenarateSignature(payload:string | object | Buffer){
return sign(payload, APP_SECRET, {expiresIn: "1d"})
}


// THIS IS ONLY GETTING SIGNATURE/TOKEN AND BE SURES THAT IT GET THE TOKEN
export async function ValidateSignature(req:Request | any){
    try {
        const signature = req.get("Authorization")
        console.log(signature)
        const payload = verify(signature.split(" ")[1], APP_SECRET)

        req.user = payload
        return true
    } catch (err) {
        return false
    }
    
    }
 
export async function FormData(data:any){
    if(data){
        return data
    } 
    throw new Error("Data not found")
}