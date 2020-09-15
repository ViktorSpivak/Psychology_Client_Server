import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
// import { JwtService } from '@nestjs/jwt';
// import { JwtService } from '@nestjs/jwt';
import { dbServices } from 'src/dbServices/dbServices.service';
import { IUser } from '../../../common/interfaces';
// import { Services } from '../services/services.module';
// import { AppService } from 'src/app.service';

@Injectable()
export class AuthService {
  constructor(private services: dbServices, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.services.findOneUser(username);
    // console.log(user);
    const validPass = bcrypt.compare(pass, user.password);
    if (validPass) {
      user.password = null;
      // const { password, ...x } = user;
      // console.log('result', x);
      return user;
    }
    return null;
  }
  async login(user: IUser): Promise<any> {
    const payload = { username: user.name, sub: user._id };
    // console.log(payload);
    const token = this.jwtService.sign(payload);
    await this.services.findAndUpdate(user._id, { token });
    return {
      token,
    };
  }
}
