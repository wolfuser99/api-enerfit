import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @IsEmail()
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
}
