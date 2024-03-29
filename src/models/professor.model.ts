import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { CourseModel } from "./course.model";

import {
  OasAreasProfessorProperty,
  OasEmailProfessorProperty,
  OasLattesProfessorProperty,
  OasNameProfessorProperty,
  OasPhotoProfessorProperty,
  OasShortbioProfessorProperty
} from "src/docs/decorators";

export type ProfessorField = keyof ProfessorModel;

@Entity({ name: "tbl_professor" })
export class ProfessorModel extends BaseModel {

  @OasNameProfessorProperty()
  @Column()
  public name: string;

  @OasShortbioProfessorProperty()
  @Column()
  public shortbio: string;
  
  @OasEmailProfessorProperty()
  @Column()
  public email: string;

  @OasLattesProfessorProperty()
  @Column()
  public lattesUrl: string;

  @OasPhotoProfessorProperty()
  @Column()
  public photoUrl: string;

  @OasAreasProfessorProperty()
  public areas: string[];

  @ManyToOne(() => CourseModel, course => course.professors)
  public course: CourseModel;

}