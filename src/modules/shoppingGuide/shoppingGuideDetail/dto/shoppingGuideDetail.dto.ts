import { Field } from '@nestjs/graphql';

export class ShoppingGuideDetail {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  stock: number;

  @Field()
  wasBought: boolean;

  @Field()
  deliveryState: string;

  @Field()
  shoppingGuideId: number;

  @Field()
  providerProductId: number;
}
