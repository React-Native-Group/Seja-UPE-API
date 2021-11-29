import { NotFoundException } from "@nestjs/common";

export class CourseNotFoundException extends NotFoundException {

  constructor(){
    super('O curso informado não foi encontrado ou não existe mais.');
  }

}