import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateProductDto } from './create.dto';

@InputType({ description: 'Batch create of products' })
export class BatchCreteProductsDto {
  @ValidateNested()
  @ArrayMinSize(1)
  @Type()
  @Field(type => [CreateProductDto])
  products: CreateProductDto[];
}
