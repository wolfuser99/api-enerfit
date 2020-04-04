import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { ShippingGuide } from '../shippingGuide/shippingGuide.entity';

@Table
export class Customer extends Model<Customer> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => ShippingGuide)
  shippingGuides: ShippingGuide[];
}
