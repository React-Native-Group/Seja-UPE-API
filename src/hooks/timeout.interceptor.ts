import { CallHandler, ExecutionContext, Injectable, NestInterceptor, RequestTimeoutException } from "@nestjs/common";
import { catchError, Observable, throwError, timeout, TimeoutError } from "rxjs";

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(25000), catchError(error => {
      if (error instanceof TimeoutError)
        return throwError(() => new RequestTimeoutException("A solicitação demorou muito tempo para responder!"));
      return throwError(() => error);
    }));
  }

}