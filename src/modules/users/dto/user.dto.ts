import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { User as UserDB, UserRole } from '../user.entity';

registerEnumType(UserRole, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User {
  @Field()
  readonly email: string;

  @Field()
  readonly name: string;

  @Field({ nullable: true })
  readonly lastname: string;

  @Field(type => UserRole)
  role: UserRole;

  @Field()
  readonly createdAt: Date;
  @Field()
  readonly updatedAt: Date;

  constructor(user?: UserDB) {
    this.email = user?.email;
    this.name = user.name;
    this.lastname = user.lastname;
    this.role = user.role;
    this.createdAt = user.createdAt;
    // this.age = age;
  }
}
