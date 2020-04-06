import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ShippingGuide } from '../shippingGuide.entity';
import { ShoppingGuideDetail } from 'src/modules/shoppingGuide/shoppingGuideDetail/shoppingGuideDetail.entity';

@Table
export class ShippingGuideDetail extends Model<ShippingGuideDetail> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  quantity: number;

  @ForeignKey(() => ShippingGuide)
  @Column
  shippingGuideId: number;
  @BelongsTo(() => ShippingGuide)
  shippingGuide: ShippingGuide;

  @ForeignKey(() => ShoppingGuideDetail)
  @Column
  shoppingGuideDetailId: number;
  @BelongsTo(() => ShoppingGuideDetail)
  shoppingGuideDetail: ShoppingGuideDetail;
}
