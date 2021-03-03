import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  IPost,
  IUser,
  IUserRequest,
  INewPropertiesRequest,
  INewPropertiesUser,
  INewPropertiesPost,
  TElementId,
  IFeedback,
  IDiploma,
  INewPropertiesFeedback,
  INewPropertiesDiploma,
} from '../../../common/interfaces';
import { Diploma } from './models/diploma.schema';
import { Feedback } from './models/feedback.schema';
import { Post } from './models/post.schema';
import { User } from './models/user.schema';
import { User_Request } from './models/userRequest.schema';

@Injectable()
export class dbServices {
  constructor(
    @InjectModel(User_Request.name) private modelRequest: Model<User_Request>,
    @InjectModel(User.name) private modelUser: Model<User>,
    @InjectModel(Post.name) private modelPost: Model<Post>,
    @InjectModel(Feedback.name) private modelFeedback: Model<Feedback>,
    @InjectModel(Diploma.name) private modelDiploma: Model<Diploma>,
  ) {}
  async createUser(user: IUser): Promise<any> {
    const createdUser = new this.modelUser(user);
    return createdUser.save();
  }

  async findUserByName(username: string): Promise<any> {
    return this.modelUser.findOne({ name: username }).exec();
  }
  async findUserById(id: string): Promise<any> {
    return this.modelUser.findById(id).exec();
  }

  async findAllUsers(): Promise<any> {
    return this.modelUser
      .find()
      .lean()
      .exec();
  }

  async findAndUpdateUser(
    id: string,
    newProperties: INewPropertiesUser,
  ): Promise<any> {
    await this.modelUser.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }

  async createRequest(createUserRequest: IUserRequest): Promise<any> {
    const createdRequest = new this.modelRequest(createUserRequest);
    return createdRequest.save();
  }

  async findAllRequests(): Promise<any> {
    return this.modelRequest
      .find()
      .lean()
      .exec();
  }

  async findRequestById(id: string): Promise<any> {
    return this.modelRequest.findById(id).exec();
  }

  async findAndUpdateRequest(
    id: string,
    newProperties: INewPropertiesRequest,
  ): Promise<any> {
    await this.modelRequest.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }

  async findAndDelete(id: string): Promise<any> {
    await this.modelUser.findOneAndDelete({ id });
  }

  async createPost(post: IPost): Promise<any> {
    const createdRequest = new this.modelPost(post);
    return createdRequest.save();
  }
  async deletePost(id: string): Promise<any> {
    return this.modelPost.deleteOne({_id:id});
  }
  async findAllPosts(): Promise<any> {
    return this.modelPost
      .find()
      .lean()
      .exec();
  }

  async findPostById(id: string): Promise<any> {
    return this.modelPost.findById(id).lean().exec();
  }
  async findFeedbackById(id: string): Promise<any> {
    return this.modelFeedback.findById(id).lean().exec();
  }
  async findDiplomaById(id: string): Promise<any> {
    return this.modelDiploma.findById(id).lean().exec();
  }

  async editPost(
    id: string,
    newProperties: INewPropertiesPost,
  ): Promise<any> {
   return await this.modelPost.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }
  
  async findAllFeedback(): Promise<any> {
    return this.modelFeedback
      .find()
      .lean()
      .exec();
  }
  async createFeedback(feedback: IFeedback): Promise<any> {
    const createdFeedback = new this.modelFeedback(feedback);
    return createdFeedback.save();
  }
  async editFeedback(
    id: string,
    newProperties: INewPropertiesFeedback,
  ): Promise<any> {
   return await this.modelFeedback.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }
  async deleteFeedback(id: string): Promise<any> {
    return this.modelFeedback.deleteOne({_id:id});
  }
  async findAllDiploma(): Promise<any> {
    return this.modelDiploma
      .find()
      .lean()
      .exec();
  }
  async createDiploma(diploma: IDiploma): Promise<any> {
    const createdDiploma = new this.modelDiploma(diploma);
    return createdDiploma.save();
  }
  async editDiploma(
    id: string,
    newProperties: INewPropertiesDiploma,
  ): Promise<any> {
   return await this.modelDiploma.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }
  async deleteDiploma(id: string): Promise<any> {
    return this.modelDiploma.deleteOne({_id:id});
  }
}
