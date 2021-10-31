import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { getPermissionsFromNumber } from '../permissions.enum';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredPerms = this.reflector.getAllAndOverride<string[]>('permissions', [
      context.getHandler(),
      context.getClass()
    ]);

    if (!requiredPerms)
      return true;

    const { user } = context.switchToHttp().getRequest();
    const userPerms = getPermissionsFromNumber(user?.permissions);

    return requiredPerms.some((r_perm) => 
      userPerms.some((u_perm) => r_perm == u_perm));
  }
}