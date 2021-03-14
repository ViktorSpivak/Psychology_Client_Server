import { Injectable } from '@nestjs/common';
import { IUserMessage } from '../../../common/interfaces';
import { dbServices } from '../dbServices/dbServices.service';

@Injectable()
export class UserMessageService {
  constructor(private services: dbServices) {}
  async createMessage(userMessage: IUserMessage): Promise<any> {
    this.services.createMessage(userMessage);
  }
}
