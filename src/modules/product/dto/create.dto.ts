import { InputType, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNotEmpty,
  MinLength,
  IsString,
  IsNumber,
} from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field()
  @IsBoolean()
  active: boolean;

  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;

  @Field()
  @IsNumber()
  categoryId: number;
}
