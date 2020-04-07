import { Resolver, Args, Query } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';

import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './dto/auth.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(returns => Auth, { nullable: true })
  async login(@Args('data') loginInput: LoginInput) {
    try {
      return await this.authService.login(loginInput);
    } catch (error) {
      console.log(error);

      throw new AuthenticationError(
        'The email or password is not in our registers',
      );
    }
  }
}
