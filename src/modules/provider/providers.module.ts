import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProviderProduct } from './providerProduct/providerProduct.entity';
import { ProviderProductsService } from './providerProduct/providerProducts.service';
import { ProviderProductsResolver } from './providerProduct/providerProducts.resolver';

@Module({
  imports: [SequelizeModule.forFeature([ProviderProduct])],
  providers: [ProviderProductsService, ProviderProductsResolver],
})
export class ProvidersModule {}
