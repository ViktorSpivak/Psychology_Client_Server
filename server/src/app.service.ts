import { Injectable } from '@nestjs/common';
import { dbServices } from './dbServices/dbServices.service';

@Injectable()
export class AppService {
  constructor(private services: dbServices) {}

  async findAllPosts(): Promise<any> {
    const posts = await this.services.findAllPosts();
    const postsForAdminList = posts.map(el => ({ ...el, id: el._id }));
    return postsForAdminList;
  }
  async findPostById(id: string): Promise<any> {
    const post = await this.services.findPostById(id)
    const postForAdminList = { ...post, id: post._id };
    return postForAdminList;
  }
  async findDiplomaById(id: string): Promise<any> {
    const diploma = await this.services.findDiplomaById(id)
    const diplomaForAdminList = { ...diploma, id: diploma._id };
    return diplomaForAdminList;
  }
  async findFeedbackById(id: string): Promise<any> {
    const feedback = await this.services.findFeedbackById(id)
    const feedbackForAdminList = { ...feedback, id: feedback._id };
    return feedbackForAdminList;
  }
  async findAllFeedback(): Promise<any> {
    const feedbacks = await this.services.findAllFeedback();
    const feedbacksForAdminList = feedbacks.map(el => ({ ...el, id: el._id }));
    return feedbacksForAdminList;
  }
  async findAllDiploma(): Promise<any> {
    const diplomas = await this.services.findAllDiploma();
    const diplomasForAdminList = diplomas.map(el => ({ ...el, id: el._id }));
    return diplomasForAdminList;
  }
  
}
