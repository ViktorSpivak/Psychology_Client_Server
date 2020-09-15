import { Injectable } from '@nestjs/common';
import { dbServices } from 'src/dbServices/dbServices.service';
// import { Services } from '../services/services.module';
// import { AppService } from 'src/app.service';

@Injectable()
export class AuthService {
  constructor(private services: dbServices) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.services.findOne(username);
    // console.log('user=', user);
    if (
      user
      // && user.password === pass
    ) {
      // const { text } = user;
      // console.log(result);
      return user;
    }
    return null;
  }
}
