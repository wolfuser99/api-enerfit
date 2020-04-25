import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  BeforeUpdate,
  BeforeCreate,
  DataType,
  Default,
  HasMany,
} from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';
import { PurchaseOrder } from '../purchaseOrder/purchaseOrder.entity';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ allowNull: false })
  name: string;

  @Column
  lastname: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  password: string;

  @Default(UserRole.USER)
  @Column({ type: DataType.ENUM('ADMIN', 'USER'), allowNull: false })
  role: UserRole;

  @Default(true)
  @Column
  active: boolean;

  @Default(false)
  @Column
  updatedDefaultPassword: boolean;

  @Column
  imageFile: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => PurchaseOrder)
  purchaseOrders: PurchaseOrder[];

  @BeforeUpdate
  @BeforeCreate
  static async before(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
