import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
// import { AppControllers } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
// import { DbServicesModule } from './dbServices/dbServices.module';
// import { ServicesModule } from './dbServices/dbServices.module';
import { UserRequestsModule } from './userRequests/userRequests.module';
require('dotenv').config();
const URLdb = process.env.URLdb;
const URLadmindb = process.env.URLadmindb;

@Module({
  imports: [
    MongooseModule.forRoot(URLdb, {
      connectionName: 'userRequests',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forRoot(URLadmindb, {
      connectionName: 'users',
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
