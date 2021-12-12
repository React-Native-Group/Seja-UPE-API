import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import _ from "lodash";

@Catch(Error)
export class UnhandledErrorFilter implements ExceptionFilter {

  private readonly logger = new Logger(UnhandledErrorFilter.name);

  getExceptionName(exception: Error) {
    return _.snakeCase("Status" + exception.name).toLowerCase();
  }

  async catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    
    this.logger.error(exception.message, exception.stack, exception.name);

    response.status(500).json({
      timestamp: +new Date,
      path: request.url,
      error: true,
      status: 500,
      code: this.getExceptionName(exception), 
      response: null
    });
  }
  
}
