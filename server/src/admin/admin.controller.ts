// import { Controller, Get } from '@nestjs/common';
// import { IUserRequest } from '../../../common/interfaces';

// @Controller('admin')
// export class AdminController {
//   constructor(private readonly adminService: AdminService) {}

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

// @Get()
// async findAll(): Promise<IUserRequest[]> {
//   return this.adminService.findAll();
// }
// }
