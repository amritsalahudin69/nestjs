import 'dotenv/config'

import { Module } from '@nestjs/common';
// import {MongooseModule} from '@nestjs/mongoose'
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/youapp'),
    UsersModule
  ],
  controllers: [UsersController]
})
export class AppModule {}
