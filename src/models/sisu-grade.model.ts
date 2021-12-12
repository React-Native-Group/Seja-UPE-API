import { Column, Entity, ManyToOne } from "typeorm";
import { IsInt, Matches } from "class-validator";
import { BaseModel } from "./base.model";
import { CourseModel } from "./course.model";
import { OasHighestSisuGradeProperty, OasLowestSisuGradeProperty, OasShareholderHighestSisuGradeProperty, OasShareholderLowestSisuGradeProperty, OasYearSisuGradeProperty } from "src/docs/decorators";

const GRADE_PATTERN = new RegExp(/^\d{1,3}(?:\.\d{1,2}$)?/);

export type SisuGradeField = keyof SisuGradeModel;

@Entity({ name: "tbl_sisu_grade" })
export class SisuGradeModel extends BaseModel {

  @OasYearSisuGradeProperty()
  @IsInt()
  @Column()
  public year: number;

  @OasShareholderHighestSisuGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderHighest: string;

  @OasShareholderLowestSisuGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public shareholderLowest: string;

  @OasHighestSisuGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public highest: string;

  @OasLowestSisuGradeProperty()
  @Matches(GRADE_PATTERN)
  @Column()
  public lowest: string;

  @ManyToOne(() => CourseModel, course => course.sisuGrades)
  public course: CourseModel;

}