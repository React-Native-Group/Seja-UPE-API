import { IsInt, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { CourseModel } from "./course.model";
import { BaseModel } from "./base.model";

const GRADE_PATTERN = new RegExp(/^\d{1,2}(?:\.\d{1,2}$)?/);

export type SsaGradeField = keyof SsaGradeModel;

@Entity({ name: 'tbl_ssa_grade' })
export class SsaGradeModel extends BaseModel {

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

  @Column()
  public concurrence: number;

  @ManyToOne(() => CourseModel, course => course.ssaGrades)
  public course: CourseModel;

}