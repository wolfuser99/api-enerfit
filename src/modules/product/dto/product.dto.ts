import { ObjectType, Field } from '@nestjs/graphql';
import { ProviderProductDto } from '../../provider/providerProduct/dto/providerProduct.dto';

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

  @Field()
  providerProducts: ProviderProductDto[];

  // @HasMany(() => PurchaseOrderDetail)
  // purchaseOrderDetails: PurchaseOrderDetail[];
}
