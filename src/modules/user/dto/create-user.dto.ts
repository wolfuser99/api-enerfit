import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

import { UserRole } from '../user.entity';

@InputType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  name: string;

  @Field({ nullable: true, defaultValue: '' })
  lastname?: string;

  // @Field({ nullable: true })
  // imageFile?: string;
  @Field({ nullable: true })
  role?: UserRole;
}
