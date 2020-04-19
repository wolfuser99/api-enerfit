import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Customer {
  @Field()
  id: number;

  @Field()
  rut: string;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  purchaseUnity: string;

  @Field()
  manager: string;

  @Field()
  phone: number;

  @Field()
  direction: string;

  // @HasMany(() => PurchaseOrder)
  // purchaseOrders: PurchaseOrder[];
}
