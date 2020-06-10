import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

import { Category } from './dto/category.dto';
import { CategoriesService } from './categories.service';
import { Roles } from 'src/modules/shared/auth/roles.decorator';
import { GQLAuthGuard } from 'src/modules/shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from 'src/modules/shared/util';
import { CreateCategoryDto } from './dto/create.dto';

@Resolver(of => Category)
export class CategoriesResolver {
  constructor(private categoryService: CategoriesService) {}

  @Roles(['ADMIN'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [Category], { nullable: true })
  async categories(): Promise<Category[]> {
    try {
      return await this.categoryService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Category, { nullable: true })
  async createCategory(@Args('data') data: CreateCategoryDto) {
    try {
      return await this.categoryService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Category, { nullable: true })
  async updateCategory(
    @Args('data') data: CreateCategoryDto,
    @Args('id') id: string,
  ) {
    try {
      return await this.categoryService.update(id, data);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Int, { nullable: true })
  async deleteCategory(@Args('id') id: string) {
    try {
      return await this.categoryService.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
}
