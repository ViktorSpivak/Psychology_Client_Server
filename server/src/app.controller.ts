import { Controller, Get, Param } from '@nestjs/common';
import { TElementId } from '../../common/interfaces';
import { AppService } from './app.service';

@Controller()
export class AppControllers {
  constructor(private readonly appService: AppService) {}
  @Get('/posts')
  async findAllPosts(): Promise<any> {
    return this.appService.findAllPosts();
  }
  @Get('/post/:id')
  async findPostById(@Param() params: TElementId): Promise<any> {
    return this.appService.findPostById(params.id);
  }
}
