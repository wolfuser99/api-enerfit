import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { Product } from 'src/modules/product/product.entity';
import { Provider } from '../provider.entity';
import { ShoppingGuideDetail } from 'src/modules/shoppingGuide/shoppingGuideDetail/shoppingGuideDetail.entity';
import { ShippingGuideDetail } from 'src/modules/shippingGuide/shippingGuideDetail/shippingGuideDetail.entity';

@Table
export class ProviderProduct extends Model<ProviderProduct> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  purchasePrice: number;

  @Column
  salePrice: number;

  @Default(0)
  @Column
  stock: number;

  @ForeignKey(() => Product)
  @Column
  productId: number;
  @BelongsTo(() => Product)
  product: Product;

  @ForeignKey(() => Provider)
  @Column
  providerId: number;
  @BelongsTo(() => Provider)
  provider: Provider;

  @HasMany(() => ShoppingGuideDetail)
  shoppingGuideDetails: ShoppingGuideDetail[];

  @HasMany(() => ShippingGuideDetail)
  shippingGuideDetails: ShippingGuideDetail[];
}
