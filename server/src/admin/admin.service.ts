import { Injectable } from '@nestjs/common';
import { IPost, IUser } from '../../../common/interfaces';
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
  async findUserById(id: string): Promise<any> {
    return this.services.findUserById(id);
  }
  //async findAndUpdateUser(id: string): Promise<any> {
  //   return this.services.findAndUpdateUser(id);
  // }

  async findUserRequestById(id: string): Promise<any> {
    return this.services.findRequestById(id);
  }

  async findAllRequests(): Promise<any> {
    return this.services.findAllRequests();
  }

  async createPost(post: IPost): Promise<any> {
    return this.services.createPost(post);
  }
}
