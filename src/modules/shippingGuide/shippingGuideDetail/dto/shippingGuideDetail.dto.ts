import { Field } from '@nestjs/graphql';

export class ShippingGuideDetail {
  @Field()
  id: number;

  @Field()
  quantity: number;

  @Field()
  shippingGuideId: number;

  @Field()
  providerProductId: number;
}
