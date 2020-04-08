import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly userModel: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.userModel.findAll<Category>({});
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.userModel.create<Category>(createCategoryDto);
  }
}
