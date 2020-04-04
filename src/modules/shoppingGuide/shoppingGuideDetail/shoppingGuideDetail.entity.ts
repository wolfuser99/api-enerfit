import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ShoppingGuide } from '../shoppingGuide.entity';
import { Product } from 'src/modules/product/product.entity';

@Table
export class ShoppingGuideDetail extends Model<ShoppingGuideDetail> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => ShoppingGuide)
  @Column
  shoppingGuideId: number;
  @BelongsTo(() => ShoppingGuide)
  shoppingGuide: ShoppingGuide;

  @ForeignKey(() => Product)
  @Column
  productId: number;
  @BelongsTo(() => Product)
  product: Product;
}
