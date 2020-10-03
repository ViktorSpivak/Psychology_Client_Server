import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Res,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth-guards/jwt-auth.guard';
import { Response } from 'express';
import {
  IPost,
  IUser,
  IUserRequest,
  TElementId,
} from '../../../common/interfaces';
import { AdminService } from './admin.service';

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
  @Get('/user/:id')
  async findUser(@Param() params: TElementId): Promise<IUser> {
    return this.adminService.findUserById(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/request/:id')
  async findUserRequestById(
    @Param() params: TElementId,
  ): Promise<IUserRequest> {
    return this.adminService.findUserRequestById(params.id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/requests')
  async findAllRequest(@Res() res: Response): Promise<IUserRequest[]> {
    const requests = await this.adminService.findAllRequests();
    res.setHeader('Content-Range', 'requests 0-10/10');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range');

    res.json(requests);
    return;
  }

  // @UseGuards(JwtAuthGuard)
  @Post('/create_post')
  async createPost(@Body() post: IPost): Promise<any> {
    return await this.adminService.createPost(post);
  }

  // @UseGuards(JwtAuthGuard)

  @UseGuards(JwtAuthGuard)
  @Get('/posts/:id')
  async findPost(@Param() params: TElementId): Promise<IPost> {
    return this.adminService.findPostById(params.id);
  }
  // @UseGuards(JwtAuthGuard)
  // @Post('/post_edit/:id')
  // async editPost(@Request() req: any): Promise<IUserRequest[]> {
  //   return this.adminService.editPost();
  // }
}
