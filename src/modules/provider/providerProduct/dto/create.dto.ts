import { Field, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class CreateProviderProductDto {
  @Field()
  @IsNumber()
  purchasePrice: number;

  @Field()
  @IsNumber()
  salePrice: number;

  @Field()
  @IsNumber()
  stock: number;

  @Field()
  @IsNumber()
  productId: number;

  @Field()
  @IsNumber()
  providerId: number;
}
