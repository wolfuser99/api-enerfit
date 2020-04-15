import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @Field()
  active: boolean;

  @Field()
  name: string;

  @Field()
  providerId: string;

  @Field()
  categoryId: number;
}
