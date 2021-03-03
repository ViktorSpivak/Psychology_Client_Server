import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AppControllers } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbServicesModule } from './dbServices/dbServices.module';
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
    MongooseModule.forRoot(URLdb, {
      connectionName: 'posts',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forRoot(URLdb, {
      connectionName: 'feedbacks',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    MongooseModule.forRoot(URLdb, {
      connectionName: 'diplomas',
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
    DbServicesModule,
  ],
  // exports: [DbServicesModule],
  controllers: [AppControllers],
  providers: [AppService],
})
export class AppModule {}
