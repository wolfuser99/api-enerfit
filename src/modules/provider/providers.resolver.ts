import { Resolver } from '@nestjs/graphql';
import { Provider } from './dto/provider.dto';

@Resolver(of => Provider)
export class ProvidersResolver {}
