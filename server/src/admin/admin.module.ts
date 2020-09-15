import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DbServicesModule } from 'src/dbServices/dbServices.module';
// import { AppModule } from 'src/app.module';
import { UserRequestsModule } from '../userRequests/userRequests.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { JwtService } from '@nestjs/jwt';
// import { User_Requests, UserRequestSchema } from '../models/userRequest.schema';

@Module({
  imports: [DbServicesModule, AuthModule],
  // AppModule,
  // UserRequestsModule,
  // MongooseModule.forFeature([
  //   { name: User_Requests.name, schema: UserRequestSchema },
  // ]),
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
