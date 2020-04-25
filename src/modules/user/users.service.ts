import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MailerService } from '@nestjs-modules/mailer';
import crypto = require('crypto');

import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
    private readonly mailerService: MailerService,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll<User>({
      attributes: { exclude: ['password'] },
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const password = crypto.randomBytes(8).toString('hex');
    dto['password'] = password;
    console.log(dto);
    await this.mailerService.sendMail({
      to: 'wolfuser99@gmail.com', // list of receivers
      subject: 'Testing Nest MailerModule ✔', // Subject line
      html: '<b>welcome</b>' + JSON.stringify(dto), // HTML body content
    });

    return await this.userModel.create<User>(dto);
  }
}
