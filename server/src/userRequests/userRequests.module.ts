import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRequestsController } from './userRequests.controller';
import { UserRequestsService } from './userRequests.service';
import {
  User_Request,
  UserRequestSchema,
} from '../dbServices/userRequest.schema';
import { DbServicesModule } from 'src/dbServices/dbServices.module';
// import { ServicesModule } from '../dbServices/dbServices.module';

@Module({
  imports: [
    DbServicesModule,
    // MongooseModule.forFeature([
    //   { name: User_Request.name, schema: UserRequestSchema },
    // ]),
  ],
  controllers: [UserRequestsController],
  providers: [UserRequestsService],
  // exports: [MongooseModule],
})
export class UserRequestsModule {}
