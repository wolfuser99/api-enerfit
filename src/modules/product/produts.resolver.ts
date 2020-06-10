import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

import { Product } from './dto/product.dto';
import { ProductsService } from './products.service';
import { Roles } from '../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from '../shared/util';
import { CreateProductDto } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';
import { BatchCreteProductsDto } from './dto/batchCreate.dto';

@Resolver(of => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query(returns => String, { nullable: true })
  hello(@Args('name') name: string): string {
    const time =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    return `Hello ${name}! ` + time;
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [Product], { nullable: true })
  async products(): Promise<Product[]> {
    try {
      return await this.productService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Product, { nullable: true })
  async createProduct(@Args('data') data: CreateProductDto): Promise<Product> {
    try {
      return await this.productService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => [Product], { nullable: true })
  async createProducts(
    @Args('data') data: BatchCreteProductsDto,
  ): Promise<Product[]> {
    try {
      return await this.productService.createBatch(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Product, { nullable: true })
  async updateProduct(
    @Args('data') data: UpdateProductDto,
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
  async deleteProduct(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.productService.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
}
