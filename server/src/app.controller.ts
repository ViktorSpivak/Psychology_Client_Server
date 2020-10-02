import { Controller, Get, Param, Res } from '@nestjs/common';
import { TElementId } from '../../common/interfaces';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppControllers {
  constructor(private readonly appService: AppService) {}
  @Get('/posts')
  async findAllPosts(@Res() res: Response): Promise<any> {
    const posts = await this.appService.findAllPosts();
    res.setHeader('Content-Range', 'admin/users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(posts);
  }
  @Get('/post/:id')
  async findPostById(@Param() params: TElementId): Promise<any> {
    return this.appService.findPostById(params.id);
  }
}
