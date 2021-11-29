import { NotFoundException } from "@nestjs/common";

export class CampusNotFoundException extends NotFoundException {

  constructor(){
    super('O Campus informado não foi encontrado ou não existe mais.');
  }

}