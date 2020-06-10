import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { Product } from '../product.entity';

@Table
export class Category extends Model<Category> {
  @Column({ primaryKey: true })
  id: string;

  @HasMany(() => Product)
  products: Product[];
}
