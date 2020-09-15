import * as sgMail from '@sendgrid/mail';
import { IMailMassage } from '../../../common/interfaces';
require('dotenv').config();
sgMail.setApiKey(process.env.KEY_SEND);

export const sendEmail = async (msg: IMailMassage): Promise<any> =>
  await sgMail
    .send(msg)
    .catch(err => console.log('SendGrid err: ', err.response.body));
