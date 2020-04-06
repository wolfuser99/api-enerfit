import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/modules/user/dto/user.dto';

@ObjectType({ description: 'Login Response' })
export class Auth {
  @Field({ description: 'JWT token' })
  token: string;
  @Field({ description: 'JWT token type' })
  tokenType: string;
  @Field({ description: 'Authenticated user details' })
  user: User;
}
