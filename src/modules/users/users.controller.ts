import { UsersService } from './users.service';
import { Controller, Get, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

    @Get()
  async findAll():Promise<User[]> {
    const users=await this.userService.findAll()
    return users.map(user=>new User(user));
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }
}
