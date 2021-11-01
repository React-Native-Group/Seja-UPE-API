import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {

  private m_DiscordWebhook: any = {
    Webhook: '<WebhookUrl>',
    IconUrl: '<IconUrl>',
    ErrorTitle: "Exceção não tratada capturada!",
    ErrorDescription: "O filtro de exceções detectou uma exceção não tratada na API Seja UPE Nest.",
    ErrorFooter: "Copyright (c) 2021 Seja UPE"
  };

  constructor(private http: HttpService) { }

  private chunkString(str, length): string[] {
    return str.match(new RegExp('(.|[\r\n]){1,' + length + '}', 'g'));
  }

  private generateMessage(message: string): any[]{
    return this.chunkString(message, 1024).map(x => {
      return { "name": "Error Message", "value": x };
    });
  }

  sendNotification(err: HttpException) {
    return new Promise((resolve, _reject) => {
      this.http.post(this.m_DiscordWebhook.Webhook, {
        embeds: [
          {
            "author": {
              "name": "[Exception Filter] Seja UPE Webservice",
              "icon_url": this.m_DiscordWebhook.IconUrl
            },
            "title": this.m_DiscordWebhook.ErrorTitle,
            "description": this.m_DiscordWebhook.ErrorDescription,
            "color": 15258703,
            "fields": [
              { "name": "Error Name", "value": err.name },
              { "name": "Error Message", "value": this.generateMessage(err.message) }
            ],
            "footer": {
              "text": this.m_DiscordWebhook.ErrorFooter
            }
          }
        ]
      }, {
        headers: { "Content-Type": "application/json" }
      }).subscribe(() => resolve(true));
    });
  }

}