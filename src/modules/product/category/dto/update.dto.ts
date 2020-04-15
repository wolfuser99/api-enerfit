import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryDto {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  name: string;
}
