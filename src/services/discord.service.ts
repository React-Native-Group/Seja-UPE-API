import Config from '../config/discord.json';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class DiscordService {

  private m_DiscordWebhook: any = {
    Webhook: Config.webhookUrl,
    IconUrl: Config.iconUrl,
    ErrorTitle: Config.errorTitle,
    ErrorDescription: Config.errorDescription,
    ErrorFooter: Config.errorFooter
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
              "name": Config.authorName,
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