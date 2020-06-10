import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create.dto';
import { UpdateCategoryDto } from './dto/update.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly model: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.model.findAll<Category>({});
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    return await this.model.create<Category>(dto);
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('Category not found');
  }

  async delete(id: string): Promise<string> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('Category not found');
  }
}
