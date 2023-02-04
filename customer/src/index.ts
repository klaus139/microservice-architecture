import express from 'express';
import { PORT } from './config';
import { databaseConnection } from './database';

const startServer = async() => {
    const app = express();
    await databaseConnection();

}