import dotenv from 'dotenv';
//dotenv.config();

if(process.env.NODE_ENV !== 'prod') {
  const configFIle = `.env.${process.env.NODE_ENV}`;
  require('dotenv').config({ path: configFIle })

} else {
    dotenv.config();
}

export const PORT = process.env.PORT as string;

export const DB_URL = process.env.DB_URL as string;

export const APP_SECRET = process.env.APP_SECRET as string;