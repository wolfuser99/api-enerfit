import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'Example field (placeholder)' })
  email: string;
  @Field({ description: 'Example field (placeholder)' })
  password: string;

  @Field({ nullable: true, description: 'Example field (placeholder)' })
  phoneNumber?: string;
  @Field({ description: 'Example field (placeholder)' })
  displayName: string;

  @Field({ nullable: true, description: 'Example field (placeholder)' })
  photoURL?: string;
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  emailVerified: boolean;

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  disabled: boolean;
}
