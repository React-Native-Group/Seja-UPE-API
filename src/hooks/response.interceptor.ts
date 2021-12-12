import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";
import { Request, Response } from "express";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  
  checkLoaderStresser(request: Request) {
    return request.url.includes("loaderio-022767dc0449f0ebeaecc33271dc3004");
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(map(data => {
      if (this.checkLoaderStresser(request)){
        return data;
      }

      return {
        timestamp: +new Date,
        path: request.path,
        error: false,
        status: response.statusCode,
        code: "status_success",
        response: data
      }
    }));
  }

}