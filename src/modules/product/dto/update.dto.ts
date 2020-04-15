import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto {
  @Field()
  active: boolean;

  @Field()
  name: string;

  @Field()
  providerId: string;

  @Field()
  categoryId: number;
}
