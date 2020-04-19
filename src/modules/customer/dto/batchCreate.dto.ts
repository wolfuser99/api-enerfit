import { InputType, Field } from '@nestjs/graphql';
import { ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCustomerDto } from './create.dto';

@InputType({ description: 'Batch create of customers' })
export class BatchCreteCustomersDto {
  @ValidateNested()
  @ArrayMinSize(1)
  @Type()
  @Field(type => [CreateCustomerDto])
  products: CreateCustomerDto[];
}
