import express from "express";
import cors from "cors"
import logger from "morgan"
import {Product} from "./api"

// MIDDLEWARE CONFIGURATION
export const expressApp = async(app:express.Application) => {
    app.use(express.json())

    app.use(cors())

    app.use(logger("dev"))

    //  API
    Product(app)
}