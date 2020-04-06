import {
  Model,
  Table,
  Column,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { PurchaseOrderDetail } from '../purchaseOrder/purchaseOrderDetail/purchaseOrderDetail.entity';
import { ShoppingGuideDetail } from '../shoppingGuide/shoppingGuideDetail/shoppingGuideDetail.entity';
import { ShippingGuideDetail } from '../shippingGuide/shippingGuideDetail/shippingGuideDetail.entity';
import { Category } from './category/category.entity';
import { ProviderProduct } from '../provider/providerProduct/providerProduct.entity';

@Table
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  providerId: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => ProviderProduct)
  providerProducts: ProviderProduct[];

  @HasMany(() => PurchaseOrderDetail)
  purchaseOrderDetails: PurchaseOrderDetail[];
}
