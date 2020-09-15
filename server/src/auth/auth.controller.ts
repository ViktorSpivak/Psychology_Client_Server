import { Controller, Post, UseGuards, Body, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ILoginRequest } from '../../../common/interfaces';
// import { Services } from './dbServices/dbServices.module';
// import { AppService } from './app.service';

@Controller()
export class AuthController {
  // constructor(private readonly appService: Services) {}
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(
    @Request()
    req: any,
    // @Body() loginRequest: ILoginRequest
  ): // {
  //   name: string;
  //   email: string;
  //   phone: string;
  //   _id: string;
  //   text: string;
  // }
  Promise<any> {
    console.log('resp', req.user);
    // return req;
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
