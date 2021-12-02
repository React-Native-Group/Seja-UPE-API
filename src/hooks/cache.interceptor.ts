import { CacheInterceptor, ExecutionContext, Injectable } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class CacheRequestInterceptor extends CacheInterceptor {
  
  trackBy(context: ExecutionContext): string | undefined {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (request.method != 'GET')
      return undefined;

    return request.path;
  }

}

export const CacheInterceptorProvider = { provide: APP_INTERCEPTOR, useClass: CacheInterceptor };