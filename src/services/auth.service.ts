import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TokenPayload } from "google-auth-library";
import { AuthorizationModel } from "src/models";

import { getNumberFromPermissions, Permission } from 'src/security'

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
  async buildToken(payload: any, permissions: [keyof typeof Permission] = ["DEFAULT_LEVEL"]): Promise<string> 
  {
    let accessMask = getNumberFromPermissions(permissions.map(v => Permission[v]));
    return await this.jwtService.signAsync({payload, permissions: accessMask});
  }

  /**Função para verificar se já houve uma autorização realizada no passado.
   * 
   * @param idToken O token id do usuário.
   * @param payload A carga útil do objeto de retorno da api OAuth2 Google.
   * @returns Promise<boolean>
   */
  async getPreviousAuthorization(idToken: string, payload: TokenPayload)
  {
    const { email, sub, at_hash: atHash, iat, exp } = payload;
    let count = await this.authorizations.count({ email });
    let authorization = this.authorizations.create({ idToken, email, sub, atHash: atHash, iat, exp });
    await this.authorizations.save(authorization);
    return !(count > 0); //Can send welcome mail?
  }

}