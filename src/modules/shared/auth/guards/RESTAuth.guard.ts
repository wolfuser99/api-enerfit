import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ForbiddenError, AuthenticationError } from 'apollo-server-express';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RESTAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const rolesPermitted = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    const GQLHeaders = GqlExecutionContext.create(context).getContext().headers;
    const restHeader = context.switchToHttp().getRequest().headers;
    const ctx: any = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers.authorization) {
      throw new AuthenticationError('Header authorization needed');
    }

    ctx.user = this.validateToken(ctx.headers.authorization);
    const roleNeeded = this.reflector.get<string>('role', context.getHandler());
    return this.validateRole(ctx.user.role, roleNeeded);
  }

  validateToken(auth: string) {
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
  }
}
