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

@Table
export class PurchaseOrder extends Model<PurchaseOrder> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @HasMany(() => PurchaseOrderDetail)
  purchaseOrderDetailss: PurchaseOrderDetail[];
}
