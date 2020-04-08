import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { Category } from './dto/category.dto';
import { CategoriesService } from './categories.service';
import { Roles } from 'src/modules/shared/auth/roles.decorator';
import { GQLAuthGuard } from 'src/modules/shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from 'src/modules/shared/util';
import { CreateCategoryDto } from './dto/create.dto';

@Resolver(of => Category)
export class CategoriesResolver {
  constructor(private categoryService: CategoriesService) {}

  @Query(returns => String, { nullable: true })
  hello(@Args('name') name: string): string {
    const time =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    return `Hello ${name}! ` + time;
  }

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation(returns => Category, { nullable: true })
  async createCategory(@Args('data') data: CreateCategoryDto) {
    try {
      return await this.categoryService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }
}
