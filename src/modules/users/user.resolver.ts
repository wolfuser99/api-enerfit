import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { User } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UsersService) {}

  @Query(returns => String, { nullable: true })
  hello(@Args('name') name: string): string {
    const time =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    return `Hello ${name}! ` + time;
  }

  @Query(returns => [User], { nullable: true })
  async users(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(returns => User, { nullable: true })
  async createUser(@Args('data') data: CreateUserDto) {
    return await this.userService.create(data);
  }
}
