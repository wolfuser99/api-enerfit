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
} from 'sequelize-typescript';
import * as bcrypt from 'bcryptjs';

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true, unique: true })
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

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BeforeUpdate
  @BeforeCreate
  static async before(user: User) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
