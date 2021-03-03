import { Controller, Get, Param, Res } from '@nestjs/common';
import { TElementId } from '../../common/interfaces';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppControllers {
  constructor(private readonly appService: AppService) {}

  @Get('/diplomas')
  async findAllDiploma(@Res() res: Response): Promise<any> {
    const diplomas = await this.appService.findAllDiploma();

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(diplomas);
  } 
  @Get('/diplomas/:id')
  async findDiplomaById(@Param() params: TElementId): Promise<any> {
    return this.appService.findDiplomaById(params.id);
  }
  @Get('/posts')
  async findAllPosts(@Res() res: Response): Promise<any> {
    const posts = await this.appService.findAllPosts();
    res.setHeader('Content-Range', 'posts 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(posts);
  }
  @Get('/posts/:id')
  async findPostById(@Param() params: TElementId): Promise<any> {
    return this.appService.findPostById(params.id);
  }
  @Get('/feedbacks/:id')
  async findFeedbackById(@Param() params: TElementId): Promise<any> {
    return this.appService.findFeedbackById(params.id);
  }
  
  @Get('/feedbacks')
  async findAllFeedback(@Res() res: Response): Promise<any> {
    const feedbacks = await this.appService.findAllFeedback();

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(feedbacks);
  } 
}
