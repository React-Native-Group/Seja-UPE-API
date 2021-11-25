import { TokenPayload } from "google-auth-library";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { AuthorizationModel } from "src/models";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(AuthorizationModel)
    private authorizations: Repository<AuthorizationModel>,
    private jwtService: JwtService){}

  /**Constrói o Json Web Token a ser enviado para o usuário.
   * 
   * @param payload O payload retornado pelo OAuth2.
   * @returns Promise<string>
   */
  async buildToken(payload: TokenPayload): Promise<string> {
    return await this.jwtService.signAsync(payload);
  }

  /**Função para verificar se já houve uma autorização realizada no passado.
   * 
   * @param idToken O token id do usuário.
   * @param userEmail O e-mail do usuário.
   * @param nonce Um nonce gerado pelos servidores da Google na autorização.
   * @returns Promise<boolean>
   */
  async getPreviousAuthorization(idToken: string, userEmail: string, nonce: string){
    let count = await this.authorizations.count({ userEmail });
    await this.authorizations.save({ idToken, userEmail, nonce });
    return !(count > 0); //Can send welcome mail?
  }

}