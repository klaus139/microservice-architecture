import mongoose, {Schema} from 'mongoose';

export interface IProduct {
    name: string;
    desc: string;
    banner: string;
    type: string;
    unit: string;
    price: number;
    avaialble: boolean;
    supplier: string;

}
const productSchema = new Schema({
    name: String,
    desc: String,
    banner: String,
    type: String,
    unit: String,
    price: Number,
    avaialble: Boolean,
    supplier: String,
}, {
    timestamps: true
})

export const ProductModel = mongoose.model<IProduct>('Product', productSchema)