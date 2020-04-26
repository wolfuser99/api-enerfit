import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

import { ProviderProductDto } from './dto/providerProduct.dto';
import { ProviderProductsService } from './providerProducts.service';
import { Roles } from '../../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../../shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from '../../shared/util';
import { CreateProviderProductDto } from './dto/create.dto';
import { UpdateProviderProductDto } from './dto/update.dto';

@Resolver(of => ProviderProductDto)
export class ProviderProductsResolver {
  constructor(private productService: ProviderProductsService) {}

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [ProviderProductDto], { nullable: true })
  async providerProducts(): Promise<ProviderProductDto[]> {
    try {
      return await this.productService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => ProviderProductDto, { nullable: true })
  async createProviderProduct(@Args('data') data: CreateProviderProductDto) {
    try {
      return await this.productService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  // @Roles(['ADMIN', 'USER'])
  // @UseGuards(GQLAuthGuard)
  // @Mutation(returns => [ProviderProductDto], { nullable: true })
  // async createProducts(@Args('data') data: BatchCreteProductsDto) {
  //   try {
  //     return await this.productService.createBatch(data);
  //   } catch (error) {
  //     dbErrorGQL(error, this.constructor.name);
  //   }
  // }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => ProviderProductDto, { nullable: true })
  async updateProviderProduct(
    @Args('data') data: UpdateProviderProductDto,
    @Args('id') id: number,
  ) {
    try {
      return await this.productService.update(id, data);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Int, { nullable: true })
  async deleteProviderProduct(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.productService.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
}
