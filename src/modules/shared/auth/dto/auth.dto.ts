import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType({description:'Login Response'})
export class Auth {
  @Field({ description: 'JWT token' })
  token: string;
  @Field({ description: 'JWT token type' })
  tokenType: string;
}
