import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { UseGuards, Logger } from '@nestjs/common';
import { ApolloError } from 'apollo-server-express';

import { Provider } from './dto/provider.dto';
import { ProvidersService } from './providers.service';
import { Roles } from '../shared/auth/roles.decorator';
import { GQLAuthGuard } from '../shared/auth/guards/GQLAuth.guard';
import { dbErrorGQL } from '../shared/util';
import { CreateProviderDto } from './dto/create.dto';
import { UpdateProviderDto } from './dto/update.dto';

@Resolver(of => Provider)
export class ProvidersResolver {
  constructor(private providerService: ProvidersService) {}

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Query(returns => [Provider], { nullable: true })
  async providers(): Promise<Provider[]> {
    try {
      return await this.providerService.findAll();
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Provider, { nullable: true })
  async createProvider(
    @Args('data') data: CreateProviderDto,
  ): Promise<Provider> {
    try {
      return await this.providerService.create(data);
    } catch (error) {
      dbErrorGQL(error, this.constructor.name);
    }
  }

  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Provider, { nullable: true })
  async updateProvider(
    @Args('data') data: UpdateProviderDto,
    @Args('id') id: number,
  ) {
    try {
      return await this.providerService.update(id, data);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
  @Roles(['ADMIN', 'USER'])
  @UseGuards(GQLAuthGuard)
  @Mutation(returns => Int, { nullable: true })
  async deleteProvider(@Args('id', { type: () => Int }) id: number) {
    try {
      return await this.providerService.delete(id);
    } catch (error) {
      Logger.error(error);
      throw new ApolloError(error);
    }
  }
}
