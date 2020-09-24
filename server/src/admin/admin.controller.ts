import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth-guards/jwt-auth.guard';
import {
  IPost,
  IUser,
  IUserRequest,
  TElementId,
} from '../../../common/interfaces';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  // @UseGuards(JwtAuthGuard)
  @Post('/create_user')
  async createUser(@Body() user: IUser): Promise<any> {
    return await this.adminService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  async findAllUsers(): Promise<IUserRequest[]> {
    return this.adminService.findAllUsers();
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
  async findAllRequest(): Promise<IUserRequest[]> {
    return this.adminService.findAllRequests();
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create_post')
  async createPost(@Body() post: IPost): Promise<any> {
    return await this.adminService.createPost(post);
  }

  // @UseGuards(JwtAuthGuard)

  // @UseGuards(JwtAuthGuard)
  // @Get('/post/:id')
  // async findPost(@Request() req: any): Promise<IUserRequest[]> {
  //   return this.adminService.findPost();
  // }
  // @UseGuards(JwtAuthGuard)
  // @Post('/post_edit/:id')
  // async editPost(@Request() req: any): Promise<IUserRequest[]> {
  //   return this.adminService.editPost();
  // }
}
