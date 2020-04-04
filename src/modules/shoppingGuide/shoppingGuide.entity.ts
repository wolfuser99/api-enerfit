import {
  Model,
  Table,
  Column,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { ShoppingGuideDetail } from './shoppingGuideDetail/shoppingGuideDetail.entity';
import { Provider } from '../provider/provider.entity';

@Table
export class ShoppingGuide extends Model<ShoppingGuide> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @HasMany(() => ShoppingGuideDetail)
  shoppingGuideDetails: ShoppingGuideDetail[];

  @ForeignKey(() => Provider)
  @Column
  providerId: number;
  @BelongsTo(() => Provider)
  provider: Provider;
}
