import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { compare } from "compare-versions";
import { Request } from "express";
import { Observable } from "rxjs";
import { OutdatedVersionException } from "src/exceptions";
import { requiredClientVersion } from "src/config/client.json";

@Injectable()
export class VersionInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    const clientVersion = request.get("x-app-version");
    const clientRequiredVersion = requiredClientVersion;

    if (!!clientVersion){
      if (compare(clientVersion, clientRequiredVersion, "<")){
        throw new OutdatedVersionException();
      }
      return next.handle();
    }
    
    throw new OutdatedVersionException();
  }

}