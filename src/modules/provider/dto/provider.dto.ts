import { Field } from '@nestjs/graphql';

export class Provider {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  rut: string;

  @Field()
  business: string;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field()
  currentAccountNumber: string;

  @Field()
  deliveryTransport: string;
}
