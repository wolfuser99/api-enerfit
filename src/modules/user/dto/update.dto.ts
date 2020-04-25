import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsEmail } from 'class-validator';
import { UserRole } from '../user.entity';

@InputType()
export class CreateUserDto {
  @IsOptional()
  @Field()
  @IsEmail()
  email: string;

  @IsOptional()
  @Field()
  name: string;

  @IsOptional()
  @Field()
  lastname?: string;

  @IsOptional()
  @Field()
  password: string;

  @IsOptional()
  @Field({ nullable: true })
  role: UserRole;

  // @Default(true)
  // @Column
  // active: boolean;

  // @Default(false)
  // @Column
  // updatedDefaultPassword: boolean;
  @IsOptional()
  @Field()
  imageFile: string;
}
