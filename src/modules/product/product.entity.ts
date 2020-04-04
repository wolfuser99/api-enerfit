import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { PurchaseOrderDetail } from '../purchaseOrder/purchaseOrderDetail/purchaseOrderDetail.entity';
import { ShoppingGuideDetail } from '../shoppingGuide/shoppingGuideDetail/shoppingGuideDetail.entity';
import { ShippingGuideDetail } from '../shippingGuide/shippingGuideDetail/shippingGuideDetail.entity';

@Table
export class Product extends Model<Product> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => PurchaseOrderDetail)
  purchaseOrderDetails: PurchaseOrderDetail[];

  @HasMany(() => ShoppingGuideDetail)
  shoppingGuideDetails: ShoppingGuideDetail[];

  @HasMany(() => ShippingGuideDetail)
  shippingGuideDetails: ShippingGuideDetail[];
}
