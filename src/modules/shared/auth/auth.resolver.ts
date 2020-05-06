import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { AuthenticationError } from 'apollo-server-express';
import { UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './dto/auth.dto';
import { GQLAuthGuard } from './guards/GQLAuth.guard';
import { GQLJWTToken } from './GQLJWTToken.decorator';

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

  // TODO: renovate token

  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Boolean, { nullable: true })
  async logout(@GQLJWTToken() token: string): Promise<boolean> {
    return await this.authService.logout(token);
  }
}
