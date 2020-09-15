import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { User_Requests, UserRequestSchema } from '../models/userRequest.schema';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { DbServicesModule } from 'src/dbServices/dbServices.module';
// import { DbServicesModule } from 'src/dbServices/dbServices.module';
// import { AdminModule } from 'src/admin/admin.module';
// import { ServicesModule } from '../dbServices/dbServices.module';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   { name: User_Requests.name, schema: UserRequestSchema },
    // ]),
    PassportModule,
    DbServicesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
