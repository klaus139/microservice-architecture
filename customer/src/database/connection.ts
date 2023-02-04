import mongoose from 'mongoose';
import {DB_URL} from '../config';

export const databaseConnection = async() => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(DB_URL)
        console.log('Database connected');

    }catch (err){
        console.log('Error ====== ')
        console.log(err);
        process.exit(1);
    }
}