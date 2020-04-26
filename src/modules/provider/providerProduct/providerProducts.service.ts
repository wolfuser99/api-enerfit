import { Injectable } from '@nestjs/common';
import { ProviderProduct } from './providerProduct.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProviderProductDto } from './dto/create.dto';
import { UpdateProviderProductDto } from './dto/update.dto';

@Injectable()
export class ProviderProductsService {
  constructor(
    @InjectModel(ProviderProduct)
    private readonly model: typeof ProviderProduct,
  ) {}

  async findAll(): Promise<ProviderProduct[]> {
    return await this.model.findAll<ProviderProduct>({
      /* include: [Category] */
    });
  }

  async create(dto: CreateProviderProductDto): Promise<ProviderProduct> {
    return await this.model.create<ProviderProduct>(dto);
  }
  // async createBatch(
  //   dto: BatchCreteProviderProductsDto,
  // ): Promise<ProviderProduct[]> {
  //   return await this.model.bulkCreate(dto.ProviderProducts, {
  //     returning: true,
  //   });
  // }

  async update(
    id: number,
    dto: UpdateProviderProductDto,
  ): Promise<ProviderProduct> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('ProviderProduct not found');
  }

  async delete(id: number): Promise<number> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('ProviderProduct not found');
  }
}
