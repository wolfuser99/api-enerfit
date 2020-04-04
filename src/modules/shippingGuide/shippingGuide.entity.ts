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

@Table
export class ShippingGuide extends Model<ShippingGuide> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => ShippingGuideDetail)
  shippingGuideDetails: ShippingGuideDetail[];

  @ForeignKey(() => Customer)
  @Column
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;
}
