import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { CustomersResolver } from './customers.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  providers: [CustomersService, CustomersResolver],
})
export class CustomersModule {}
