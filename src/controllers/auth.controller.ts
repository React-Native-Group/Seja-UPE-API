import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from "@nestjs/common";

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

  constructor(private authService: AuthService){}
  
  @OasAuthOperation()
  @OasAuthResponse()
  @OasAuthUnauthorizedResponse()
  @HttpCode(HttpStatus.OK)
  @Post("authorize")
  async onAuthRequested(@Body() body: AuthorizationValidator)
  {
    return await this.authService.authorizeGoogleToken(body.idToken);
  }

}
