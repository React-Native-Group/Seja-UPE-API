import { ExecutionContext, Injectable } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err)
      throw err;
    return user;
  }

}

export const JwtAuthProvider = {
  provide: APP_GUARD,
  useClass: JwtAuthGuard
}