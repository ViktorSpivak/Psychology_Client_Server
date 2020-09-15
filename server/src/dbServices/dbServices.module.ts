import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { dbServices } from './dbServices.service';
import { User, UserSchema } from './user.shema';
// import { Services1 } from './dbServices.service';
import { User_Request, UserRequestSchema } from './userRequest.schema';
// require('dotenv').config();
// const URLdb = process.env.URLdb;

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: User_Request.name, schema: UserRequestSchema }],
      'userRequests',
    ),
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'users',
    ),
  ],
  providers: [dbServices],
  exports: [dbServices],
})
export class DbServicesModule {}
