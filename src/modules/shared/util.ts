import { ApolloError } from 'apollo-server-express';
import { Logger } from '@nestjs/common';

export const dbErrorGQL = (error: any, context?: string) => {
  Logger.error(error, context);

  throw new ApolloError(
    error.name + ': ' + error?.errors?.[0]?.message,
    error?.fields,
  );
};