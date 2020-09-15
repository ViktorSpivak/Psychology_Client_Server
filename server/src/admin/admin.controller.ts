import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth-guards/jwt-auth.guard';
import { IUser, IUserRequest } from '../../../common/interfaces';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @UseGuards(JwtAuthGuard)
  @Post('/create_user')
  async createUser(@Body() user: IUser): Promise<any> {
    // const x = async () => await bcrypt.hash('shortid.generate()', 10);
    // console.log(await x());
    // default: async () => {
    //   const y = async () => {
    //     const x = await bcrypt.hash(shortid.generate(), COUNT_FACTOR);
    //     return x;
    //   };
    //   return await y();
    // },
    // shortid.generate();

    return await this.adminService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/users')
  async findAllUsers(@Request() req: any): Promise<IUserRequest[]> {
    return this.adminService.findAllUsers();
  }
}
