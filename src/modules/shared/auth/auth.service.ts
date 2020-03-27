import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from 'src/modules/users/user.entity';
import { Auth } from './dto/auth.dto';
import { LoginInput } from './dto/login-input.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async login(loginInput: LoginInput) {
    Logger.log(`Loggin request by: ${loginInput.email}`, this.constructor.name);
    const user = await this.userModel.findByPk(loginInput.email);
    if (!user || !(await user.validatePassword(loginInput.password))) {
      Logger.log('Invalid email/password', this.constructor.name);
      throw new Error('Invalid email/password');
    }

    const auth = new Auth();
    auth.tokenType = 'Bearer';
    auth.token = await this.jwtService.signAsync({
      sub: user.id,
      role: user.role,
    });
    return auth;
  }
}
