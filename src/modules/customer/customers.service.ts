import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Customer } from './customer.entity';
import { CreateCustomerDto } from './dto/create.dto';
import { BatchCreteCustomersDto } from './dto/batchCreate.dto';
import { UpdateCustomerDto } from './dto/update.dto';

@Injectable()
export class CustomersService {
  constructor(@InjectModel(Customer) private readonly model: typeof Customer) {}

  async findAll(): Promise<Customer[]> {
    return await this.model.findAll<Customer>({
      /*  include: [Category]  */
    });
  }

  async create(dto: CreateCustomerDto): Promise<Customer> {
    return await this.model.create<Customer>(dto);
  }
  async createBatch(dto: BatchCreteCustomersDto): Promise<Customer[]> {
    return await this.model.bulkCreate(dto.products, { returning: true });
  }

  async update(id: number, dto: UpdateCustomerDto): Promise<Customer> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      return await elem.update(dto);
    }
    throw new Error('Customer not found');
  }

  async delete(id: number): Promise<number> {
    const elem = await this.model.findByPk(id);
    if (elem !== null) {
      await elem.destroy();
      return id;
    }
    throw new Error('Customer not found');
  }
}
