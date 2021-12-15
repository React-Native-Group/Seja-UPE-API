import { Mailer } from "@muryllo/mailer";
import { Injectable } from "@nestjs/common";
import { readFile } from "fs";
import { resolve } from "path";
import { mailerKey, from, fromName, welcomeSubject } from "src/config/smtp.json";

@Injectable()
export class MailerService {

  sendWelcomeMail(userName: string, address: string): Promise<boolean> {
    return new Promise<boolean>((result, _) => {
      readFile(resolve(__dirname, "../views/mails/welcome.html"), async (err, data) => {
        if (!!err)
          return result(false);
        
        const body = data.toString()
          .replace("${{USER_NAME}}", userName);

        let mail = new Mailer()
          .key(mailerKey)
          .from(fromName, from)
          .to(userName, address)
          .subject(welcomeSubject)
          .htmlBody(body)
          .textBody("E-mail indisponível para o seu dispositivo. Tente acessar esse e-mail pelo seu computador.");
        
        return result((await mail.send()).success());
      });
    });
  }

}
