import { Body, Controller, Post } from '@nestjs/common';
import { UserMessageService } from './userMessage.service';
import { IUserMessage } from '../../../common/interfaces';
import { sendEmail } from 'src/helpers/sendGrid';

@Controller()
export class UserMessageController {
  constructor(private readonly userMessageService: UserMessageService) {}

  @Post('/message')
  async create(@Body() userMessage: IUserMessage): Promise<any> {
    const { name, email, phone, text } = userMessage;
    const msg = {
      to: 'pointed.s@gmail.com',
      from: 'spivakmailbox@gmail.com',
      subject: 'Request from user',
      html: `<h1>Massage from client<h1><p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p> Massage: ${text}</p>`,
    };
    sendEmail(msg)
      .then(res => res
        // console.log('SendGrid response: ', res)
        )
      .catch(err => console.log('SendGrid error: ', err));

 await this.userMessageService.createMessage(userMessage);
 return "Запрос создан"
  }
}
