import { Injectable } from '@nestjs/common';
import { dbServices } from './dbServices/dbServices.service';

@Injectable()
export class AppService {
  constructor(private services: dbServices) {}

  async findAllPosts(): Promise<any> {
    const posts = await this.services.findAllPosts();
    const postsForAdminList = posts.map(el => ({ ...el, id: el._id }));
    //  {
    // const { date, headline, topic, _id } = el;
    // const post = { date, headline, topic, id: _id };
    // return post;
    // });
    return postsForAdminList;
  }
  async findPostById(id: string): Promise<any> {
    return this.services.findPostById(id);
  }
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
