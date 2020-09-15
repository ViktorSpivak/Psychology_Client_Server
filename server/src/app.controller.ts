// import {
//   Controller,
//   Get,
//   Post,
//   UseGuards,
//   Request,
//   Body,
// } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { ILoginRequest } from '../../common/interfaces';
// // import { Services } from './dbServices/dbServices.module';
// // import { AppService } from './app.service';

// @Controller()
// export class AppControllers {
//   // constructor(private readonly appService: Services) {}
//   @UseGuards(AuthGuard('local'))
//   @Post('auth/login')
//   async login(@Body() loginRequest: ILoginRequest): Promise<any> {
//     console.log(loginRequest);

//     return loginRequest;
//   }
// }
