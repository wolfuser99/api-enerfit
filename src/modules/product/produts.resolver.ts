import { Resolver } from '@nestjs/graphql';
import { Product } from './dto/product.dto';
import { ProductsService } from './products.service';

@Resolver(of => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}
}
