import { Field } from '@nestjs/graphql';

export class ShoppingGuide {
  @Field()
  id: number;

  @Field()
  purchaseOrderId: number;
}
