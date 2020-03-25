import { IsString, IsEmail, IsNotEmpty, MinLength, IsBoolean } from 'class-validator';
import { InputType,Field } from '@nestjs/graphql';

import { UserRole } from '../user.entity';

@InputType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  name: string;

  @Field({nullable:true})
  lastname?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

}
