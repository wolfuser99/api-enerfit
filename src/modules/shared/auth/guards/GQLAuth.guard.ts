import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { ForbiddenError, AuthenticationError } from 'apollo-server-express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';

@Injectable()
export class GQLAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permittedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    const GQLHeaders = GqlExecutionContext.create(context).getContext().req
      .headers;
    if (!GQLHeaders.authorization) {
      throw new AuthenticationError('Header authorization needed');
    }
    if (GQLHeaders.authorization.split(' ')[0] !== 'Bearer') {
      throw new ForbiddenError('Invalid token');
    }
    const token = GQLHeaders.authorization.split(' ')[1];

    try {
      await this.authService.isTokenAndRoleValid(token, permittedRoles);
    } catch (error) {
      Logger.error(error, this.constructor.name);
      throw new ForbiddenError(error.message);
    }
    return true;
  }

  /*   validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new ForbiddenError('Invalid token');
    }
    const token = auth.split(' ')[1];

    try {
      const decoded: any = this.jwtService.verify(token);
      return decoded;
    } catch (err) {
      const message = 'Token error: ' + (err.message || err.name);
      throw new ForbiddenError(message);
    }
  }

  validateRole(role: string, roleNeeded: string) {
    if (role === roleNeeded) {
      return true;
    }
    const message = `${roleNeeded} role needed`;
    throw new ForbiddenError(message);
  } */
}
