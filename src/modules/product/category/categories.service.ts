import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create.dto';
import { UpdateCategoryDto } from './dto/update.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly userModel: typeof Category,
  ) {
    this.update(1, null);
  }

  async findAll(): Promise<Category[]> {
    return await this.userModel.findAll<Category>({});
  }

  async create(dto: CreateCategoryDto): Promise<Category> {
    return await this.userModel.create<Category>(dto);
  }

  async update(id: number, dto: UpdateCategoryDto): Promise<Category> {
    const elem = await this.userModel.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('Category not found');
  }

  async delete(id: number): Promise<number> {
    const elem = await this.userModel.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('Category not found');
  }
}
