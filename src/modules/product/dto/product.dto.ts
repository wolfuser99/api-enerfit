import { ObjectType, Field } from '@nestjs/graphql';
import { Category } from '../category/dto/category.dto';

@ObjectType()
export class Product {
  @Field()
  id: number;
  @Field()
  active: boolean;

  @Field()
  name: string;

  @Field()
  providerId: string;

  @Field()
  category: Category;

  // @HasMany(() => ProviderProduct)
  // providerProducts: ProviderProduct[];

  // @HasMany(() => PurchaseOrderDetail)
  // purchaseOrderDetails: PurchaseOrderDetail[];
}
