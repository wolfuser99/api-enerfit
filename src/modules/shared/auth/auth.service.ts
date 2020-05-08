import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RedisService } from 'nestjs-redis';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/modules/user/user.entity';
import { Auth } from './dto/auth.dto';
import { LoginInput } from './dto/login-input.dto';

@Injectable()
export class AuthService {
  private client: any;
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private jwtService: JwtService,
    private readonly redisService: RedisService,
  ) {
    this.client = this.redisService.getClient();
  }

  async login(loginInput: LoginInput) {
    Logger.log(`Loggin request by: ${loginInput.email}`, this.constructor.name);
    const user = await this.userModel.findOne({
      where: { email: loginInput.email },
    });

    if (!user || !(await user.validatePassword(loginInput.password))) {
      Logger.log('Invalid email/password', this.constructor.name);
      throw new Error('Invalid email/password');
    }

    const auth = new Auth();
    auth.user = user;
    auth.tokenType = 'Bearer';
    auth.token = await this.jwtService.signAsync({
      sub: user.id,
      role: user.role,
    });
    return auth;
  }

  async isTokenAndRoleValid(token: string, permittedRoles: string[]) {
    await this.jwtService.verifyAsync(token);
    // TODO: is token blacklisted?
    const decoded = this.jwtService.decode(token);

    const withNoRoleNeeded =
      decoded['role'] !== null && permittedRoles === undefined;

    const withRoleNeeded =
      decoded['role'] !== null && permittedRoles?.includes(decoded['role']);

    return withNoRoleNeeded || withRoleNeeded;
  }

  async logout(token: string): Promise<boolean> {
    const decoded = this.jwtService.decode(token);

    if (decoded instanceof Object && decoded.exp) {
      const secondsToExpire = decoded.exp - Math.floor(Date.now() / 1000);
      await this.client.set(token, decoded.sub, 'EX', secondsToExpire + 10);

      return true;
    }
    return false;
  }
}
