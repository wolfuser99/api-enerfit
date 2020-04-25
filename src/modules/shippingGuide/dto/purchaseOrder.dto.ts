import { Field } from '@nestjs/graphql';

export class ShippingGuide {
  @Field()
  id: number;

  @Field()
  purchaseOrderId: number;
}
