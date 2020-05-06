import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GQLJWTToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const GQLHeaders = GqlExecutionContext.create(ctx).getContext().req.headers;

    return GQLHeaders.authorization.split(' ')[1];
  },
);
