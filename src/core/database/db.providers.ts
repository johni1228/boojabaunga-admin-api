import {Sequelize} from 'sequelize-typescript';
import { databaseConfig } from './db.config'
export const databaseProviders = [{
    useFactory: async () => {
        let config;
        config = databaseConfig;
        const sequelize = new Sequelize(config);
        sequelize.addModules(['modules goes here!']);
        await sequelize.sync();
        return sequelize;
    }
}]