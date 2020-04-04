import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from '../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../shared/auth/guards/GQLAuth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(returns => String, { nullable: true })
  hello(@Args('name') name: string): string {
    const time =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    return `Hello ${name}! ` + time;
  }

  @Roles(['ADMIN'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [User], { nullable: true })
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(returns => User, { nullable: true })
  async createUser(@Args('data') data: CreateUserDto) {
    return await this.userService.create(data);
  }
}
