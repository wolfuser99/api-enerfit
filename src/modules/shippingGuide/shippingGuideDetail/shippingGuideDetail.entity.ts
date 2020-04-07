import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { ShippingGuide } from '../shippingGuide.entity';
import { ProviderProduct } from 'src/modules/provider/providerProduct/providerProduct.entity';

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

  @ForeignKey(() => ProviderProduct)
  @Column
  providerProductId: number;
  @BelongsTo(() => ProviderProduct)
  providerProduct: ProviderProduct;
}
