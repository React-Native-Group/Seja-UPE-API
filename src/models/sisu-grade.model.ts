import { Column, Entity, ManyToOne } from "typeorm";
import { IsInt, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";
import { CourseModel } from "./course.model";

const GRADE_PATTERN = new RegExp(/^\d{1,3}(?:\.\d{1,2}$)?/);

@Entity({ name: 'tbl_sisu_grade' })
export class SisuGradeModel extends BaseModel {

  @ApiProperty()
  @IsInt()
  @Column()
  public year: number;

  @ApiProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderHighest: string;

  @ApiProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderLowest: string;

  @ApiProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public highest: string;

  @ApiProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public lowest: string;

  @ManyToOne(() => CourseModel, course => course.sisuGrades)
  public course: CourseModel;

}