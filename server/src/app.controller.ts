import { Controller, Get, Param, Res } from '@nestjs/common';
import { TElementId } from '../../common/interfaces';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppControllers {
  constructor(private readonly appService: AppService) {}

  @Get('/diploma')
  async findAllDiploma(@Res() res: Response): Promise<any> {
    const diplomas = await this.appService.findAllDiploma();

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(diplomas);
  } 
  @Get('/diploma/:id')
  async findDiplomaById(@Param() params: TElementId): Promise<any> {
    return this.appService.findDiplomaById(params.id);
  }
  @Get('/post')
  async findAllPosts(@Res() res: Response): Promise<any> {
    const posts = await this.appService.findAllPosts();
    res.setHeader('Content-Range', 'posts 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
    res.json(posts);
  }
  @Get('/post/:id')
  async findPostById(@Param() params: TElementId): Promise<any> {
    return this.appService.findPostById(params.id);
  }
  @Get('/feedback/:id')
  async findFeedbackById(@Param() params: TElementId): Promise<any> {
    return this.appService.findFeedbackById(params.id);
  }
  
  @Get('/feedback')
  async findAllFeedback(@Res() res: Response): Promise<any> {
    const feedbacks = await this.appService.findAllFeedback();

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(feedbacks);
  }

  @Get('/program/:id')
  async findProgramById(@Param() params: TElementId): Promise<any> {
    return this.appService.findProgramById(params.id);
  }
  
  @Get('/program')
  async findAllProgram(@Res() res: Response): Promise<any> {
    const programs = await this.appService.findAllProgram();
console.log("hh");

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(programs);
  } 
}
