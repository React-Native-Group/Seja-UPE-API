import { Request, Response } from 'express';
import { DiscordNotifyService } from 'src/services';
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  
  constructor(
    private discordService: DiscordNotifyService){ }

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status >= 500 && status < 600){
      await this.discordService.sendNotification(exception);
    }

    response.status(status).json({
      error: true,
      status: status,
      timestamp: +new Date,
      response: exception.getResponse(),
      path: request.url,
    });
  }

}