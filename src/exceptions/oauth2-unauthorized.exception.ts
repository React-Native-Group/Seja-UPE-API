import { UnauthorizedException } from "@nestjs/common";

export class OAuth2UnauthorizedException extends UnauthorizedException {

  constructor(){
    super(
      "Seu dispositivo não está autorizado a accessar os recursos do Seja UPE." + 
      "Verifique se sua conta Google está logada e tente novamente.");
  }

}