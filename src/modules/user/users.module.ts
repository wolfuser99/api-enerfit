import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, UsersResolver],
  controllers: [UsersController],
})
export class UsersModule {}
