import { Injectable } from '@nestjs/common';
import { IPost, IUser, TElementId } from '../../../common/interfaces';
import { dbServices } from '../dbServices/dbServices.service';
import * as bcrypt from 'bcryptjs';
require('dotenv').config();
const COUNT_FACTOR = process.env.COUNT_FACTOR;

@Injectable()
export class AdminService {
  constructor(private services: dbServices) {}
  async createUser(user: IUser): Promise<any> {
    user.password = await bcrypt.hash(user.password, +COUNT_FACTOR);
    return this.services.createUser(user);
  }
  async findAllUsers(): Promise<any> {
    const users = await this.services.findAllUsers();
    // console.log(...users);
    const usersForAdminList = users.map(el => ({ ...el, id: el._id }));

    return usersForAdminList;
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
    const requests = await this.services.findAllRequests();
    const requestsForAdminList = requests.map(el => ({ ...el, id: el._id }));
    return requestsForAdminList;
  }

  async createPost(post: IPost): Promise<any> {
const newPost=await this.services.createPost(post);
const newPostForAdmin = { ...newPost, id: newPost._id };
    return newPostForAdmin;

    // return this.services.createPost(post);
  }
  // async findPostById(post: string): Promise<any> {
  //   return this.services.findPostById(post);
  // }
  async editPost(id:string,newProperties:IPost): Promise<any> {
    return this.services.editPost(id,newProperties);
  }
  async deletePost(id:string): Promise<any> {
    return this.services.deletePost(id);
  }
}
