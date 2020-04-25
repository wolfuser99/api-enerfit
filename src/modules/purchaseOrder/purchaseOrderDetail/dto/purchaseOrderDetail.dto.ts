import { Field } from '@nestjs/graphql';

export class PurchaseOrderDetail {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  isInShoppingGuide: boolean;

  @Field()
  purchaseOrderId: number;

  @Field()
  productId: number;
}
