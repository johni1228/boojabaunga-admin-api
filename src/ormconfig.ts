import { ConnectionOptions } from 'typeorm'
import * as PostgresConnectionStringParser from 'pg-connection-string';
import * as dotenv from 'dotenv';

dotenv.config();
const connectionOptions = PostgresConnectionStringParser.parse(
  process.env.DATABASE_URL,
);


const config: ConnectionOptions = {
  type: 'postgres',
  host: connectionOptions.host,
  port: Number(connectionOptions.port),
  username: connectionOptions.user,
  password: connectionOptions.password,
  database: connectionOptions.database,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  // We are using migrations, synchronize should be set to false.
  synchronize: true,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: false,  
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;