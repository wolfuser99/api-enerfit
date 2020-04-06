import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { ShoppingGuide } from '../shoppingGuide.entity';
import { ProviderProduct } from 'src/modules/provider/providerProduct/providerProduct.entity';
import { ShippingGuideDetail } from 'src/modules/shippingGuide/shippingGuideDetail/shippingGuideDetail.entity';

@Table
export class ShoppingGuideDetail extends Model<ShoppingGuideDetail> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  quantity: number;

  @Column
  stock: number;

  @Column
  wasBought: boolean;

  @ForeignKey(() => ShoppingGuide)
  @Column
  shoppingGuideId: number;
  @BelongsTo(() => ShoppingGuide)
  shoppingGuide: ShoppingGuide;

  @ForeignKey(() => ProviderProduct)
  @Column
  providerProductId: number;
  @BelongsTo(() => ProviderProduct)
  providerProduct: ProviderProduct;

  @HasOne(() => ShippingGuideDetail)
  shippingGuideDetail: ShippingGuideDetail[];
}
