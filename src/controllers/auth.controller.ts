import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";

import { AuthorizationValidator } from "src/validators";
import { OAuth2UnauthorizedException } from "src/exceptions";
import { AuthService, MailerService, OAuth2Service } from "src/services";

import {
  OasAppVersionHeader,
  OasAuthOperation,
  OasAuthResponse,
  OasAuthUnauthorizedResponse,
  OasControllerTags,
  OasInvalidObjectResponse,
  OasOutdatedVersionResponse,
  OasRequestTimeoutResponse
} from "src/docs/decorators";

@OasAppVersionHeader()
@OasInvalidObjectResponse()
@OasRequestTimeoutResponse()
@OasOutdatedVersionResponse()
@OasControllerTags("Autorização")
@Controller("auth")
export class AuthController {

  constructor(
    private oauth2Service: OAuth2Service,
    private authService: AuthService,
    private mailerService: MailerService
  ){}
  
  @OasAuthOperation()
  @OasAuthResponse()
  @OasAuthUnauthorizedResponse()
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
