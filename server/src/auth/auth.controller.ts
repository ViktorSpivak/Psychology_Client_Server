import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { JwtAuthGuard } from './auth-guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth-guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/logout')
  async logout(@Request() req: any): Promise<any> {
    return this.authService.logout(req.user);
  }
}

// import { Controller, Get } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { IUserRequest } from '../../../common/interfaces';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

// @Post()
// async create(@Body() userRequest: IUserRequest): Promise<any> {
//   const { name, email, phone, text } = userRequest;
//   const msg = {
//     to: 'pointed.s@gmail.com',
//     from: 'spivakmailbox@gmail.com',
//     subject: 'Request from user',
//     html: `<h1>Massage from client<h1><p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p> Massage: ${text}</p>`,
//   };
//   sendEmail(msg)
//     .then(res => console.log('SendGrid response: ', res))
//     .catch(err => console.log('SendGrid error: ', err));

//   await this.userRequestsService.create(userRequest);
// }

//   @Get()
//   async findAll(): Promise<IUserRequest[]> {
//     return this.authService.findAll();
//   }
// }
