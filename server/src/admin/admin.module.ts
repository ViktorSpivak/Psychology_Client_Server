import { Module } from '@nestjs/common';
// import { AppModule } from 'src/app.module';
import { UserRequestsModule } from '../userRequests/userRequests.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
// import { User_Requests, UserRequestSchema } from '../models/userRequest.schema';

@Module({
  imports: [
    // AppModule,
    // UserRequestsModule,
    // MongooseModule.forFeature([
    //   { name: User_Requests.name, schema: UserRequestSchema },
    // ]),
  ],
  // controllers: [AdminController],
  providers: [AdminService],
  // exports: [AdminService],
})
export class AdminModule {}
