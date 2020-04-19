import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  MinLength,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdateCustomerDto {
  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  rut?: string;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name?: string;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  address?: string;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  purchaseUnity?: string;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  manager?: string;

  @IsOptional()
  @Field()
  @IsNumber()
  phone?: number;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  direction?: string;
}
