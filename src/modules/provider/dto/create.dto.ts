import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateProviderDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  rut: string;

  @Field()
  @IsString()
  business: string;

  @Field()
  @IsString()
  phone: string;

  @Field()
  @IsString()
  address: string;

  @Field()
  @IsString()
  currentAccountNumber: string;

  @Field()
  @IsString()
  deliveryTransport: string;
}
