import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class InvalidObjectException extends BadRequestException {

  constructor(errors: ValidationError[]){
    super({
      message: 'A sua requisição não atende aos critérios de validação, ' +
      'verifique o corpo da requisição pois alguns campos incorretos ' + 
      'foram identificados.',
      errors: errors
    });
  }

}