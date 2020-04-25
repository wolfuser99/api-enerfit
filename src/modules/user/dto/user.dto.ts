import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { UserRole } from '../user.entity';

registerEnumType(UserRole, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field({ nullable: true})
  lastname?: string;

  @Field(type => UserRole)
  role: UserRole;

  @Field()
  active: boolean;

  @Field()
  updatedDefaultPassword: boolean;

  @Field({ nullable: true })
  imageFile: string;

  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}
