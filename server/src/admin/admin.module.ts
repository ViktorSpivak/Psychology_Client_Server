import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { DbServicesModule } from 'src/dbServices/dbServices.module';
// import { AppModule } from 'src/app.module';
// import { UserMessageModule } from '../userMessage/userMessage.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
// import { JwtService } from '@nestjs/jwt';
// import { User_Message, UserMessageSchema } from '../models/userRequest.schema';

@Module({
  imports: [DbServicesModule, AuthModule],
  // AppModule,
  // UserMessageModule,
  // MongooseModule.forFeature([
  //   { name: User_Message.name, schema: UserMessageSchema },
  // ]),
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
