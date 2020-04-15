import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private readonly model: typeof Product) {}
}
