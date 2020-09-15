import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRequestsService } from './userRequests.service';
import { IUserRequest } from '../../../common/interfaces';
import { sendEmail } from 'src/helpers/sendGrid';
// import { UserRequest } from './userRequest.schema';

@Controller('userRequest')
export class UserRequestsController {
  constructor(private readonly userRequestsService: UserRequestsService) {}

  @Post()
  async create(@Body() userRequest: IUserRequest): Promise<any> {
    const { name, email, phone, text } = userRequest;
    const msg = {
      to: 'pointed.s@gmail.com',
      from: 'spivakmailbox@gmail.com',
      subject: 'Request from user',
      html: `<h1>Massage from client<h1><p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p> Massage: ${text}</p>`,
    };
    sendEmail(msg)
      .then(res => console.log('SendGrid response: ', res))
      .catch(err => console.log('SendGrid error: ', err));

    await this.userRequestsService.createRequest(userRequest);
  }

  // @Get()
  // async findAll(): Promise<IUserRequest[]> {
  //   return this.userRequestsService.findAll();
  // }
}
