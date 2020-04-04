import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UserResolver],
  controllers: [UsersController],
})
export class UsersModule {}
