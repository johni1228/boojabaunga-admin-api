import {Sequelize} from 'sequelize-typescript';
import { databaseConfig } from './db.config'

const databaseProviders = [{
    provide: 'SequelizeInstance',
    useFactory: async () => {
        let config;
        config = databaseConfig;
        const sequelize = new Sequelize(config);
        sequelize.addModels([]);
        await sequelize.sync();
        return sequelize;
    }
}]

export default databaseProviders ; 