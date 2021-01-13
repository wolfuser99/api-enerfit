import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  uid: string;

  @Field({ description: 'Example field (placeholder)' })
  email: string;

  @Field({ nullable: true, description: 'Example field (placeholder)' })
  phoneNumber?: string;
  @Field({ nullable: true, description: 'Example field (placeholder)' })
  displayName?: string;

  @Field({ nullable: true, description: 'Example field (placeholder)' })
  photoURL?: string;
  @Field(() => Boolean, {
    nullable: true,
    description: 'Example field (placeholder)',
  })
  emailVerified?: boolean;

  @Field(() => Boolean, {
    nullable: true,
    description: 'Example field (placeholder)',
  })
  disabled?: boolean;
}
