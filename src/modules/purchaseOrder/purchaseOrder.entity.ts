import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { PurchaseOrderDetail } from './purchaseOrderDetail/purchaseOrderDetail.entity';
import { Customer } from '../customer/customer.entity';
import { ShippingGuide } from '../shippingGuide/shippingGuide.entity';

@Table
export class PurchaseOrder extends Model<PurchaseOrder> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  deliveryDate: Date;

  @Column
  deliveryCity: string;

  @Column
  deliveryRegion: string;

  @Column
  deliveryAddress: string;

  @Column
  deliveryMethod: string;

  @Column
  paymentContactName: string;

  @Column
  paymentContactPhone: string;

  @Column
  paymentContactEmail: string;

  @Column
  paymentMethod: string;

  @Column
  OrderContactName: string;

  @Column
  OrderContactPhone: string;

  @Column
  OrderContactEmail: string;

  @Column
  emailToSendInvoice: string;

  @Column
  fundingSource: string;

  @Column
  budgetAvailability: string;

  @Column
  observations: string;

  @Column
  deliveryObservations: string;

  @Column
  state: string;

  @Column
  invoiceFile: string;

  @ForeignKey(() => User)
  @Column
  createdByUserId: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Customer)
  @Column
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;

  @HasMany(() => PurchaseOrderDetail)
  purchaseOrderDetailss: PurchaseOrderDetail[];

  @HasMany(() => ShippingGuide)
  shippingGuides: ShippingGuide[];
}
