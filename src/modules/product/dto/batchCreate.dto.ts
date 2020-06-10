import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateProductDto } from './create.dto';

@InputType({ description: 'Batch create of products' })
export class BatchCreteProductsDto {
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => CreateProductDto)
  @Field(type => [CreateProductDto])
  products: CreateProductDto[];
}
