import {
  Model,
  Table,
  Column,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { ShippingGuideDetail } from './shippingGuideDetail/shippingGuideDetail.entity';
import { Customer } from '../customer/customer.entity';
import { PurchaseOrder } from '../purchaseOrder/purchaseOrder.entity';

@Table
export class ShippingGuide extends Model<ShippingGuide> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => ShippingGuideDetail)
  shippingGuideDetails: ShippingGuideDetail[];

  @ForeignKey(() => PurchaseOrder)
  @Column
  purchaseOrderId: number;
  @BelongsTo(() => PurchaseOrder)
  purchaseOrder: PurchaseOrder;
}
