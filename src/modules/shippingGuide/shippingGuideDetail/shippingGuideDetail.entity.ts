import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from 'src/modules/product/product.entity';
import { ShippingGuide } from '../shippingGuide.entity';

@Table
export class ShippingGuideDetail extends Model<ShippingGuideDetail> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => ShippingGuide)
  @Column
  shippingGuideId: number;
  @BelongsTo(() => ShippingGuide)
  shippingGuide: ShippingGuide;

  @ForeignKey(() => Product)
  @Column
  productId: number;
  @BelongsTo(() => Product)
  product: Product;
}
