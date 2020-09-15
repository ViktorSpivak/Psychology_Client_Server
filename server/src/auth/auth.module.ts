import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { DbServicesModule } from 'src/dbServices/dbServices.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DbServicesModule,
    // JwtStrategy,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
