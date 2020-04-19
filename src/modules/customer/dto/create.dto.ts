import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateCustomerDto {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  rut: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  address: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  purchaseUnity: string;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  manager: string;

  @Field()
  @IsNumber()
  phone: number;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  direction: string;
}
