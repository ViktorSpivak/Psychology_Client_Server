import { Module } from '@nestjs/common';
import { UserMessageController } from './userMessage.controller';
import { UserMessageService } from './userMessage.service';
import { DbServicesModule } from 'src/dbServices/dbServices.module';

@Module({
  imports: [DbServicesModule],
  controllers: [UserMessageController],
  providers: [UserMessageService],
})
export class UserMessageModule {}
