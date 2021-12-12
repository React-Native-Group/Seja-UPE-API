import { IsInt, IsNumber, Matches } from "class-validator";
import { Column, Entity, ManyToOne } from "typeorm";
import { CourseModel } from "./course.model";
import { BaseModel } from "./base.model";

import {
  OasConcurrenceSsaGradeProperty,
  OasHighestSsaGradeProperty,
  OasLowestSsaGradeProperty,
  OasShareholderHighestSsaGradeProperty,
  OasShareholderLowestSsaGradeProperty,
  OasYearSsaGradeProperty
} from "src/docs/decorators";

const GRADE_PATTERN = new RegExp(/^\d{1,2}(?:\.\d{1,2}$)?/);

export type SsaGradeField = keyof SsaGradeModel;

@Entity({ name: "tbl_ssa_grade" })
export class SsaGradeModel extends BaseModel {

  @OasYearSsaGradeProperty()
  @IsInt()
  @Column()
  public year: number;

  @OasShareholderHighestSsaGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderHighest: string;

  @OasShareholderLowestSsaGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderLowest: string;

  @OasHighestSsaGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public highest: string;

  @OasLowestSsaGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public lowest: string;

  @OasConcurrenceSsaGradeProperty()
  @Column()
  @IsNumber()
  public concurrence: number;

  @ManyToOne(() => CourseModel, course => course.ssaGrades)
  public course: CourseModel;

}