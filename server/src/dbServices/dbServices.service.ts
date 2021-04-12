import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  IPost,
  IUser,
  IUserMessage,
  INewPropertiesRequest,
  INewPropertiesUser,
  INewPropertiesPost,
  TElementId,
  IFeedback,
  IDiploma,
  INewPropertiesFeedback,
  INewPropertiesDiploma,
  INewPropertiesProgram,
  IProgram,
} from '../../../common/interfaces';
import { Diploma } from './models/diploma.schema';
import { Feedback } from './models/feedback.schema';
import { Post } from './models/post.schema';
import { Program } from './models/program.schema';
import { User } from './models/user.schema';
import { User_Message } from './models/userMessage.schema';

@Injectable()
export class dbServices {
  constructor(
    @InjectModel(User_Message.name) private modelMessage: Model<User_Message>,
    @InjectModel(User.name) private modelUser: Model<User>,
    @InjectModel(Post.name) private modelPost: Model<Post>,
    @InjectModel(Feedback.name) private modelFeedback: Model<Feedback>,
    @InjectModel(Diploma.name) private modelDiploma: Model<Diploma>,
    @InjectModel(Program.name) private modelProgram: Model<Program>,
  ) {}
  // Users
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
  async findAndDelete(id: string): Promise<any> {
    await this.modelUser.findOneAndDelete({ id });
  }

// UserRequest
  async createMessage(createUserMessage: IUserMessage): Promise<any> {
    const createdMessage = new this.modelMessage(createUserMessage);
    return createdMessage.save();
  }


  async findAllRequests(): Promise<any> {
    return this.modelMessage
      .find()
      .lean()
      .exec();
  }

  async findRequestById(id: string): Promise<any> {
    return this.modelMessage.findById(id).exec();
  }

  async findAndUpdateRequest(
    id: string,
    newProperties: INewPropertiesRequest,
  ): Promise<any> {
    await this.modelMessage.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }

// Post
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
  
  //Feedback
  async findFeedbackById(id: string): Promise<any> {
    return this.modelFeedback.findById(id).lean().exec();
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

  //Diploma
  async findDiplomaById(id: string): Promise<any> {
    return this.modelDiploma.findById(id).lean().exec();
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

  //Program
  async findProgramById(id: string): Promise<any> {
    return this.modelProgram.findById(id).lean().exec();
  }
  async findAllProgram(): Promise<any> {
    return this.modelProgram
      .find()
      .lean()
      .exec();
  }
  async createProgram(program: IProgram): Promise<any> {
    const createdProgram = new this.modelProgram(program);
    return createdProgram.save();
  }
  async editProgram(
    id: string,
    newProperties: INewPropertiesProgram,
  ): Promise<any> {
  return await this.modelProgram.findByIdAndUpdate(
      id,
      { $set: newProperties },
      { new: true },
    );
  }
  async deleteProgram(id: string): Promise<any> {
    return this.modelProgram.deleteOne({_id:id});
  }
}
