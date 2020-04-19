import { InputType, Field } from '@nestjs/graphql';
import {
  IsOptional,
  IsBoolean,
  IsNotEmpty,
  MinLength,
  IsString,
  IsNumber,
} from 'class-validator';

@InputType()
export class UpdateProductDto {
  @IsOptional()
  @Field()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;

  @IsOptional()
  @Field()
  @IsNumber()
  categoryId: number;
}
