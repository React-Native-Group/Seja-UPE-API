import { HttpException } from "@nestjs/common";

export class OutdatedVersionException extends HttpException {

  constructor(){
    super('A versão atual do app que você utilizando está desatualizada.', 410);
  }

}