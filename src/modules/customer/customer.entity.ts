import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { PurchaseOrder } from '../purchaseOrder/purchaseOrder.entity';

@Table
export class Customer extends Model<Customer> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  rut: string;

  @Column
  name: string;

  @Column
  address: string;

  @Column
  purchaseUnity: string;

  @Column
  manager: string;

  @Column
  phone: number;

  @Column
  direction: string;

  @HasMany(() => PurchaseOrder)
  purchaseOrders: PurchaseOrder[];
}
