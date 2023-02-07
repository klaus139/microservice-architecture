import dotenv from "dotenv"

// THIS IS A CONFIGURATION TO ROUTE TO ENV.DEV FOR DEVELOPMENT STAGE
// AND THEN USE THE VARIABLES IN THE .ENV.DEV FILE

if(process.env.NODE_ENV !== "prod") {
    const configFile = `.env.${process.env.NODE_ENV}`
    require("dotenv").config({
        path:configFile
    })
} else {
    dotenv.config()
}

export const PORT = process.env.PORT as string

export const DB_URL = process.env.DB_URL as string

export const APP_SECRET= process.env.APP_SECRET as string


// NOW WE HAVE OUR PORT AND DB_URL, WE CAN MOVE ON TO SETTING UP DATABASE