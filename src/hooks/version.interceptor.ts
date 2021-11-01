import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { compare } from 'compare-versions';
import { OutdatedVersionException } from 'src/exceptions';

@Injectable()
export class VersionInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    const [clientVersion] = request.headers['X-App-Version'];
    const clientRequiredVersion = process.env.ZAGI_CLIENT_REQUIRED_VERSION;

    if (!!clientVersion){
      if (compare(clientVersion, clientRequiredVersion, '<')){
        throw new OutdatedVersionException();
      }
      return next.handle();
    }
    
    throw new OutdatedVersionException();
  }

}