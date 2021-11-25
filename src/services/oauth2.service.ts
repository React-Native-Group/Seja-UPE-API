import { Injectable } from "@nestjs/common";
import { OAuth2Client } from "google-auth-library";
import { OAuth2 } from 'src/config/server.json';

const client = new OAuth2Client(OAuth2.realClientId);

@Injectable()
export class OAuth2Service {

  async verifyIdToken(token: string) {
    try{
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [OAuth2.expoClientId, OAuth2.realClientId]
      });
      return ticket.getPayload();
    } catch(e){
      return false;
    }
  }

}