import { Injectable } from '@nestjs/common';
import { IDiploma, IFeedback, IPost, IProgram, IUser, TElementId } from '../../../common/interfaces';
import { dbServices } from '../dbServices/dbServices.service';
import * as bcrypt from 'bcryptjs';
require('dotenv').config();
const COUNT_FACTOR = process.env.COUNT_FACTOR;

@Injectable()
export class AdminService {
  constructor(private services: dbServices) {}
  // User
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
// Post
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
  
// Feedback
  async createFeedback(feedback: IFeedback): Promise<any> {
    const newFeedback=await this.services.createFeedback(feedback);
    const newFeedbackForAdmin = { ...newFeedback, id: newFeedback._id };
        return newFeedbackForAdmin;
}
async deleteFeedback(id:string): Promise<any> {
  return this.services.deleteFeedback(id);
}
async editFeedback(id:string,newProperties:IFeedback): Promise<any> {
  const newFeedback=await this.services.editFeedback(id,newProperties);
  const newFeedbackForAdmin = { ...newFeedback, id: newFeedback._id };
  return newFeedbackForAdmin;
}

// Diploma
  async createDiploma(diploma: IDiploma): Promise<any> {
    const newDiploma=await this.services.createDiploma(diploma);
    const newDiplomaForAdmin = { ...newDiploma, id: newDiploma._id };
        return newDiplomaForAdmin;
}
async deleteDiploma(id:string): Promise<any> {
  return this.services.deleteDiploma(id);
}
async editDiploma(id:string,newProperties:IDiploma): Promise<any> {
  const newDiploma=await this.services.editDiploma(id,newProperties)
  const newDiplomaForAdmin = { ...newDiploma, id: newDiploma._id };
  return newDiplomaForAdmin;
}
// Program
  async createProgram(program: IProgram): Promise<any> {
    const newProgram=await this.services.createProgram(program);
    const newProgramForAdmin = { ...newProgram, id: newProgram._id };
        return newProgramForAdmin;
}
async deleteProgram(id:string): Promise<any> {
  return this.services.deleteProgram(id);
}
async editProgram(id:string,newProperties:IProgram): Promise<any> {
  const newProgram=await this.services.editProgram(id,newProperties)
  const newProgramForAdmin = { ...newProgram, id: newProgram._id };
  return newProgramForAdmin;
}
}