import _ from "lodash";
import { Request, Response } from "express";
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {

  private readonly logger = new Logger(HttpExceptionFilter.name);

  getExceptionName(exception: HttpException) {
    return _.snakeCase("Status" + exception.name).toLowerCase();
  }

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const payload = <any>exception.getResponse();

    delete payload.statusCode;

    if (status >= 500 && status < 600){
      this.logger.error(exception.message, exception.stack, exception.name);
    }

    response.status(status).json({
      timestamp: +new Date,
      path: request.url,
      error: true,
      status: status,
      code: this.getExceptionName(exception), 
      response: payload
    });
  }

}