import { Injectable } from '@nestjs/common';
import { IUser } from '../../../common/interfaces';
import { dbServices } from '../dbServices/dbServices.service';
import * as bcrypt from 'bcryptjs';
import * as shortid from 'shortid';
require('dotenv').config();
const COUNT_FACTOR = process.env.COUNT_FACTOR;

@Injectable()
export class AdminService {
  constructor(private services: dbServices) {}
  async createUser(user: IUser): Promise<any> {
    user.password = await bcrypt.hash(shortid.generate(), +COUNT_FACTOR);
    return this.services.createUser(user);
  }
  async findAllUsers(): Promise<any> {
    return this.services.findAllUsers();
  }
}
