import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesController } from './games/games.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import  config  from './ormconfig'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
  ],
  controllers: [AppController, GamesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
