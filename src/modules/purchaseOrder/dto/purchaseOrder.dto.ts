import { Field } from '@nestjs/graphql';

export class PurchaseOrder {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  deliveryDate: Date;

  @Field()
  deliveryCity: string;

  @Field()
  deliveryRegion: string;

  @Field()
  deliveryAddress: string;

  @Field()
  deliveryMethod: string;

  @Field()
  paymentContactName: string;

  @Field()
  paymentContactPhone: string;

  @Field()
  paymentContactEmail: string;

  @Field()
  paymentMethod: string;

  @Field()
  OrderContactName: string;

  @Field()
  OrderContactPhone: string;

  @Field()
  OrderContactEmail: string;

  @Field()
  emailToSendInvoice: string;

  @Field()
  fundingSource: string;

  @Field()
  budgetAvailability: string;

  @Field()
  observations: string;

  @Field()
  deliveryObservations: string;

  @Field()
  state: string;

  @Field()
  invoiceFile: string;

  @Field()
  createdByUserId: number;

  @Field()
  customerId: number;
}
