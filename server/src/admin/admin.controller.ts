import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Res,
  Put,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth-guards/jwt-auth.guard';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { IUser, TElementId,IPost, IFeedback, IDiploma, IUserMessage } from '../../../common/interfaces';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  // @UseGuards(JwtAuthGuard)
  @Post('/create_user')
  async createUser(@Body() user: IUser): Promise<any> {
    return await this.adminService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  async findAllUsers(@Res() res: Response): Promise<any> {
    const users = await this.adminService.findAllUsers();

    res.setHeader('Content-Range', 'users 0-3/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(users);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users/:id')
  async findUser(@Param() params: TElementId): Promise<IUser> {
    return this.adminService.findUserById(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/message/:id')
  async findUserRequestById(
    @Param() params: TElementId,
  ): Promise<IUserMessage> {
    return this.adminService.findUserRequestById(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/message')
  async findAllRequest(@Res() res: Response): Promise<IUserMessage[]> {
    const requests = await this.adminService.findAllRequests();
    res.setHeader('Content-Range', 'requests 0-10/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(requests);
    return;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/post')
  async createPost(@Body() post: IPost): Promise<any> {
    return await this.adminService.createPost(post);
  }

  
  @UseGuards(JwtAuthGuard)
  @Put('/post/:id')
  async editPost(@Param() params: TElementId,@Body() post: IPost ): Promise<IUserMessage[]> {
    return this.adminService.editPost(params.id,post);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/post/:id')
  async deletePost(@Param() params: TElementId,): Promise<IPost[]> {
    return this.adminService.deletePost(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/feedback')
  async creatFeedback(@Body() feedback: IFeedback): Promise<any> {
    return await this.adminService.createFeedback(feedback);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/feedback/:id')
  async deleteFeedback(@Param() params: TElementId,): Promise<IFeedback> {
    return this.adminService.deleteFeedback(params.id);
  }

@UseGuards(JwtAuthGuard)
@Put('/feedback/:id')
async editFeedback(@Param() params: TElementId,@Body() feedback: IFeedback ): Promise<IFeedback[]> {
  return this.adminService.editFeedback(params.id,feedback);
}

  @UseGuards(JwtAuthGuard)
  @Post('/diploma')
  async creatDiploma(@Body() diploma: IDiploma): Promise<any> {
    return await this.adminService.createDiploma(diploma);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/diploma/:id')
async editDiploma(@Param() params: TElementId,@Body() diploma: IDiploma ): Promise<IDiploma[]> {
  return this.adminService.editDiploma(params.id,diploma);
}

  @UseGuards(JwtAuthGuard)
  @Delete('/diploma/:id')
  async deleteDiploma(@Param() params: TElementId,): Promise<IFeedback> {
    return this.adminService.deleteDiploma(params.id);
  }
}