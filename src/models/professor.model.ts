import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";
import { CourseModel } from "./course.model";

@Entity({ name: 'tbl_professor' })
export class ProfessorModel extends BaseModel {

  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public shortbio: string;
  
  @ApiProperty()
  @Column()
  public email: string;

  @ApiProperty()
  @Column()
  public lattesUrl: string;

  @ApiProperty()
  @Column()
  public photoUrl: string;

  @ManyToOne(() => CourseModel, course => course.professors)
  public course: CourseModel;

}