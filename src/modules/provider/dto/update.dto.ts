import { IsOptional, IsString } from 'class-validator';
import { Field } from '@nestjs/graphql';

export class UpdateProviderDto {
  @IsOptional()
  @Field()
  @IsString()
  name: string;

  @IsOptional()
  @Field()
  @IsString()
  rut: string;

  @IsOptional()
  @Field()
  @IsString()
  business: string;

  @IsOptional()
  @Field()
  @IsString()
  phone: string;

  @IsOptional()
  @Field()
  @IsString()
  address: string;

  @IsOptional()
  @Field()
  @IsString()
  currentAccountNumber: string;

  @IsOptional()
  @Field()
  @IsString()
  deliveryTransport: string;
}
