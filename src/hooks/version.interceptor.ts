import { Request } from 'express';
import { Observable } from 'rxjs';
import { compare } from 'compare-versions';
import { OutdatedVersionException } from 'src/exceptions';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

@Injectable()
export class VersionInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    const [clientVersion] = request.headers['X-App-Version'];
    const clientRequiredVersion = '0.0.1';

    if (!!clientVersion){
      if (compare(clientVersion, clientRequiredVersion, '<')){
        throw new OutdatedVersionException();
      }
      return next.handle();
    }
    
    throw new OutdatedVersionException();
  }

}