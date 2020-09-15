import { Injectable } from '@nestjs/common';
import { IUserRequest } from '../../../common/interfaces';
import { dbServices } from '../dbServices/dbServices.service';

@Injectable()
export class UserRequestsService {
  constructor(private services: dbServices) {}
  async createRequest(userRequest: IUserRequest): Promise<any> {
    this.services.create(userRequest);
  }
}
