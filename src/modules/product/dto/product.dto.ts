import { ObjectType, Field } from '@nestjs/graphql';
import { ProviderProduct } from '../../provider/providerProduct/dto/providerProduct.dto';

@ObjectType()
export class Product {
  @Field()
  id: number;

  @Field()
  active: boolean;

  @Field()
  name: string;

  @Field()
  categoryId: string;

  @Field(type => [ProviderProduct])
  providerProducts: ProviderProduct[];

  // @HasMany(() => PurchaseOrderDetail)
  // purchaseOrderDetails: PurchaseOrderDetail[];
}
