import mongoose from "mongoose"
import {DB_URL} from "../config" 

// DATABASE CONNECTION
export const databaseConnection  = async() => {
    try {
        mongoose.set("strictQuery", false)  //TO AVOID ERROR LOG DUE TO THE CURRENT VERSION OF MONGODB
        mongoose.connect(DB_URL)
        console.log("DB connected")
    } catch (err) {
        console.log("Error =====")
        console.log(err)
        process.exit(1)
    }
}