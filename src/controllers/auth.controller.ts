import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiExtension, ApiOkResponse, ApiTags } from "@nestjs/swagger";

import { AuthorizationValidator } from "src/validators";
import { OAuth2UnauthorizedException } from "src/exceptions";
import { AuthService, MailerService, OAuth2Service } from "src/services";
import { OasAppVersionHeader, OasAuthOperation } from "src/docs/decorators";

@OasAppVersionHeader()
@ApiTags("Autenticação")
@Controller("auth")
export class AuthController {

  constructor(
    private oauth2Service: OAuth2Service,
    private authService: AuthService,
    private mailerService: MailerService
  ){}
  
  @OasAuthOperation()
  @HttpCode(HttpStatus.OK)
  @Post("authorize")
  async onAuthRequested(@Body() body: AuthorizationValidator)
  {
    let payload = await this.oauth2Service.verifyIdToken(body.idToken);
    if (!payload)
      throw new OAuth2UnauthorizedException();

    const { email, name } = payload;

    if (await this.authService.getPreviousAuthorization(body.idToken, payload)){
      await this.mailerService.sendWelcomeMail(name, email);
    }

    return {
      bearer: await this.authService.buildToken(payload),
      payload
    };
  }

}
