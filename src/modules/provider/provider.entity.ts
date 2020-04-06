import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { ShoppingGuide } from '../shoppingGuide/shoppingGuide.entity';

@Table
export class Provider extends Model<Provider> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @HasMany(() => ShoppingGuide)
  shoppingGuides: ShoppingGuide[];
}
