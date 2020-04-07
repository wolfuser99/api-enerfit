import {
  Model,
  Table,
  Column,
  HasMany,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';

import { PurchaseOrderDetail } from '../purchaseOrder/purchaseOrderDetail/purchaseOrderDetail.entity';
import { Category } from './category/category.entity';
import { ProviderProduct } from '../provider/providerProduct/providerProduct.entity';

@Table
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Default(true)
  @Column
  active: boolean;

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
