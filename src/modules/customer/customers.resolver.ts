import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

import { CustomersService } from './customers.service';
import { Roles } from '../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from '../shared/util';
import { CreateCustomerDto } from './dto/create.dto';
import { BatchCreteCustomersDto } from './dto/batchCreate.dto';
import { UpdateCustomerDto } from './dto/update.dto';
import { Customer } from './dto/customer.dto';

@Resolver(of => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(returns => String, { nullable: true })
  hello(@Args('name') name: string): string {
    const time =
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    return `Hello ${name}! ` + time;
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [Customer], { nullable: true })
  async customers(): Promise<Customer[]> {
    try {
      return await this.customersService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Customer, { nullable: true })
  async createCustomer(@Args('data') data: CreateCustomerDto) {
    try {
      return await this.customersService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => [Customer], { nullable: true })
  async createCustomers(@Args('data') data: BatchCreteCustomersDto) {
    try {
      return await this.customersService.createBatch(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Customer, { nullable: true })
  async updateCustomer(
    @Args('data') data: UpdateCustomerDto,
    @Args('id') id: number,
  ) {
    try {
      return await this.customersService.update(id, data);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Int, { nullable: true })
  async deleteCustomer(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.customersService.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
}
