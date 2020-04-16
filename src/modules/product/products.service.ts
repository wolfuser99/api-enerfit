import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create.dto';
import { UpdateProductDto } from './dto/update.dto';
import { Category } from './category/category.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private readonly model: typeof Product) {}

  async findAll(): Promise<Product[]> {
    return await this.model.findAll<Product>({ include: [Category] });
  }

  async create(dto: CreateProductDto): Promise<Product> {
    return await this.model.create<Product>(dto);
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('Product not found');
  }

  async delete(id: number): Promise<number> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('Product not found');
  }
}
