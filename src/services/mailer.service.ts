import { Mailer, MailerResponse } from '@muryllo/mailer';
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs';
import { resolve } from 'path';
import { mailerKey, from, fromName, welcomeSubject } from 'src/config/smtp.json';

@Injectable()
export class MailerService {

  sendWelcomeMail(userName: string, address: string): Promise<MailerResponse | boolean> {
    return new Promise<MailerResponse | boolean>((result, _) => {
      readFile(resolve(__dirname, '../views/mails/welcome.html'), async (err, data) => {
        if (!!err)
          return result(false);

        let mail = new Mailer()
          .key(mailerKey)
          .from(fromName, from)
          .to(userName, address)
          .subject(welcomeSubject)
          .htmlBody(data.toString())
          .textBody('E-mail indisponível para o seu dispositivo. Tente acessar esse e-mail pelo seu computador.');
        
        return result(await mail.send());
      });
    });
  }

}
