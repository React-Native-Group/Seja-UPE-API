import _ from 'lodash';
import { Request, Response } from 'express';
import { DiscordService } from 'src/services';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  
  constructor(
    private discordService: DiscordService){ }

  getExceptionName(exception: HttpException) {
    return _.snakeCase(exception.name).toLocaleLowerCase();
  }

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status >= 500 && status < 600){
      await this.discordService.sendNotification(exception);
    }

    response.status(status).json({
      timestamp: +new Date,
      path: request.url,
      error: true,
      status: status,
      code: this.getExceptionName(exception), 
      response: exception.getResponse()
    });
  }

}