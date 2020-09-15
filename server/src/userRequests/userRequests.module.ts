import { Module } from '@nestjs/common';
import { UserRequestsController } from './userRequests.controller';
import { UserRequestsService } from './userRequests.service';
import { DbServicesModule } from 'src/dbServices/dbServices.module';

@Module({
  imports: [DbServicesModule],
  controllers: [UserRequestsController],
  providers: [UserRequestsService],
})
export class UserRequestsModule {}
