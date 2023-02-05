import {hash, genSalt, } from 'bcrypt';
import {sign, verify} from 'jsonwebtoken';
import { APP_SECRET } from '../config';


export async function GenerateSalt(){
    return await genSalt();

}

export async function GeneratePassword(password: string, salt: string){
    return await hash(password, salt);
}

export async function GenerateSignature(payload: string | Buffer | object ){
    return sign(payload, APP_SECRET, {expiresIn: '1d'});

}

export async function FormatData(data: any){
    if(data){
        return data
    }
    throw new Error('No data found');
}
