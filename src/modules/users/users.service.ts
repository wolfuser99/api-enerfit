import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll<User>({
      attributes: { exclude: ['password'] },
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create<User>(createUserDto);
  }
}
