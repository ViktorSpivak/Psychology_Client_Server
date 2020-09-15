import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { User_Request } from '../services/userRequest.schema';
import { ILoginResponse, IUserRequest } from '../../../common/interfaces';

@Injectable()
export class AdminService {
  // constructor(
  //   @InjectModel(User_Request.name) private model: Model<User_Request>,
  // ) {}
  // async create(createUserRequest: IUserRequest): Promise<any> {
  //   const createdRequest = new this.model(createUserRequest);
  //   return createdRequest.save();
  // }
  // async findAll(): Promise<IUserRequest[]> {
  //   return this.model.find().exec();
  // }
  // async findOne(username: string): Promise<ILoginResponse> {
  //   return this.model.find();
  // }
}
