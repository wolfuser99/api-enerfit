import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { Product } from './product.entity';
import { Category } from './category/category.entity';
import { CategoriesService } from './category/categories.service';
import { CategoriesResolver } from './category/categories.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  providers: [CategoriesService, CategoriesResolver],
})
export class ProductsModule {}
