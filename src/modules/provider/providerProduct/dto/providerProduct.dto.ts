import { Field } from '@nestjs/graphql';

export class ProviderProductDto {
  @Field()
  id: number;

  @Field()
  purchasePrice: number;

  @Field()
  salePrice: number;

  @Field()
  stock: number;

  @Field()
  productId: number;

  @Field()
  providerId: number;
}
