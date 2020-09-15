import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User_Request } from './userRequest.schema';
import { ILoginResponse, IUserRequest } from '../../../common/interfaces';

@Injectable()
export class dbServices {
  constructor(
    @InjectModel(User_Request.name) private model: Model<User_Request>,
  ) {}
  async create(createUserRequest: IUserRequest): Promise<any> {
    const createdRequest = new this.model(createUserRequest);
    return createdRequest.save();
  }
  async findAll(): Promise<IUserRequest[]> {
    return this.model.find().exec();
  }
  async findOne(username: string): Promise<any> {
    return this.model.findOne({ name: username }).exec();
  }
}
