import mongoose, { Schema } from "mongoose"

export interface IProduct{
    name:string
    desc:string
    banner:string
    type:string
    unit: number
    price:number
    available:boolean
    suplier:string
}

const ProductSchema = new Schema({
    name:String,
    desc:String,
    banner:String,
    type:String,
    unit: Number,
    price:Number,
    available:Boolean,
    suplier:String
}, {
    timestamps:true
})

export const ProductModel = mongoose.model<IProduct>("customer", ProductSchema)