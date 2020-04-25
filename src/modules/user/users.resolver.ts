import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Roles } from '../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from '../shared/util';

@Resolver(of => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Roles(['ADMIN'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [User], { nullable: true })
  async users(): Promise<User[]> {
    try {
      return await this.userService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => User, { nullable: true })
  async createUser(@Args('data') data: CreateUserDto) {
    try {
      return await this.userService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }
}
