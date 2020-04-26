import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional } from 'class-validator';

@InputType()
export class UpdateProviderProductDto {
  @Field()
  @IsOptional()
  @IsNumber()
  purchasePrice: number;

  @Field()
  @IsOptional()
  @IsNumber()
  salePrice: number;

  @Field()
  @IsOptional()
  @IsNumber()
  stock: number;

  @Field()
  @IsOptional()
  @IsNumber()
  productId: number;

  @Field()
  @IsOptional()
  @IsNumber()
  providerId: number;
}
