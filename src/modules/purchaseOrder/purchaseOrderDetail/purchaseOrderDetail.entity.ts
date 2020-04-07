import {
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { PurchaseOrder } from '../purchaseOrder.entity';
import { Product } from 'src/modules/product/product.entity';

@Table
export class PurchaseOrderDetail extends Model<PurchaseOrderDetail> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  quantity: number;

  @Column
  isInShoppingGuide: boolean;

  @ForeignKey(() => PurchaseOrder)
  @Column
  purchaseOrderId: number;
  @BelongsTo(() => PurchaseOrder)
  purchaseOrder: PurchaseOrder;

  @ForeignKey(() => Product)
  @Column
  productId: number;
  @BelongsTo(() => Product)
  product: Product;
}
