import * as dotenv from 'dotenv'
import  { IDatabaseConfigAttr } from './interfaces/db.config.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfigAttr = {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
}

