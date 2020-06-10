import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProviderProduct } from './providerProduct/providerProduct.entity';
import { ProviderProductsService } from './providerProduct/providerProducts.service';
import { ProviderProductsResolver } from './providerProduct/providerProducts.resolver';
import { Provider } from './provider.entity';
import { ProvidersService } from './providers.service';
import { ProvidersResolver } from './providers.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Provider, ProviderProduct])],
  providers: [
    ProvidersService,
    ProvidersResolver,
    ProviderProductsService,
    ProviderProductsResolver,
  ],
})
export class ProvidersModule {}
