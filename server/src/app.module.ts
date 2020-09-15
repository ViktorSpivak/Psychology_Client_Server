import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { UserRequestsModule } from './userRequests/userRequests.module';
require('dotenv').config();
const URLdb = process.env.URLdb;
const URLusersdb = process.env.URLusersdb;

@Module({
  imports: [
    MongooseModule.forRoot(URLdb, {
      connectionName: 'userRequests',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forRoot(URLusersdb, {
      connectionName: 'users',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    UserRequestsModule,
    AdminModule,
    AuthModule,
  ],
  // exports: [DbServicesModule],
  // controllers: [AppControllers],
  // providers: [AuthModule],
})
export class AppModule {}
