import { Injectable } from '@nestjs/common';
import { dbServices } from './dbServices/dbServices.service';

@Injectable()
export class AppService {
  constructor(private services: dbServices) {}
// Post
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
  // Feedback
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
  // Diploma
  async findDiplomaById(id: string): Promise<any> {
    const diploma = await this.services.findDiplomaById(id)
    const diplomaForAdminList = { ...diploma, id: diploma._id };
    return diplomaForAdminList;
  }
  async findAllDiploma(): Promise<any> {
    const diplomas = await this.services.findAllDiploma();
    const diplomasForAdminList = diplomas.map(el => ({ ...el, id: el._id }));
    return diplomasForAdminList;
  }
  // Program
  async findProgramById(id: string): Promise<any> {
    const program = await this.services.findProgramById(id)
    const programForAdminList = { ...program, id: program._id };
    return programForAdminList;
  }
  async findAllProgram(): Promise<any> {
    const programs = await this.services.findAllProgram();
    const programsForAdminList = programs.map(el => ({ ...el, id: el._id }));
    return programsForAdminList;
  }
  
}
