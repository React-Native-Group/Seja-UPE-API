import { RequestTimeoutException } from "@nestjs/common";

export class ServerTimeoutException extends RequestTimeoutException {

  constructor(){
    super("A sua solicitação demorou muito tempo para ser processada. " +
    "Estamos enfrentando problemas para fornecer uma resposta em tempo hábil.");
  }

}