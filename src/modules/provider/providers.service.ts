import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Provider } from './provider.entity';
import { CreateProviderDto } from './dto/create.dto';
import { UpdateProviderDto } from './dto/update.dto';

@Injectable()
export class ProvidersService {
  constructor(@InjectModel(Provider) private readonly model: typeof Provider) {}

  async findAll(): Promise<Provider[]> {
    return await this.model.findAll<Provider>();
  }

  async create(dto: CreateProviderDto): Promise<Provider> {
    return await this.model.create<Provider>(dto);
  }

  async update(id: number, dto: UpdateProviderDto): Promise<Provider> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('Provider not found');
  }

  async delete(id: number): Promise<number> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('Provider not found');
  }
}
