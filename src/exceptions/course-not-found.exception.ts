import { NotFoundException } from "@nestjs/common";
import { ValidationError } from "class-validator";

export class CourseNotFoundException extends NotFoundException {

  constructor(){
    super('O curso informado não foi encontrado ou não existe mais.');
  }

}