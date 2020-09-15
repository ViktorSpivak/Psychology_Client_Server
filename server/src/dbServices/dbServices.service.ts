import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User_Request } from './userRequest.schema';
import {
  INewProperties,
  IUser,
  IUserRequest,
} from '../../../common/interfaces';
import { User } from './user.shema';

@Injectable()
export class dbServices {
  constructor(
    @InjectModel(User_Request.name) private modelRequest: Model<User_Request>,
    @InjectModel(User.name) private modelUser: Model<User>,
  ) {}

  async createUser(user: IUser): Promise<any> {
    const createdUser = new this.modelUser(user);
    return createdUser.save();
  }

  async findOneUser(username: string): Promise<any> {
    return this.modelUser.findOne({ name: username }).exec();
  }

  async findAllUsers(): Promise<IUser[]> {
    return this.modelUser.find().exec();
  }

  async createRequest(createUserRequest: IUserRequest): Promise<any> {
    const createdRequest = new this.modelRequest(createUserRequest);
    return createdRequest.save();
  }

  async findAllRequests(): Promise<IUserRequest[]> {
    return this.modelRequest.find().exec();
  }

  async findOneRequest(username: string): Promise<any> {
    return this.modelRequest.findOne({ name: username }).exec();
  }

  async findAndUpdate(id: string, newProperties: INewProperties): Promise<any> {
    await this.modelUser.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }
  async findAndDelete(id: string): Promise<any> {
    await this.modelUser.findOneAndDelete({ id });
  }
}
