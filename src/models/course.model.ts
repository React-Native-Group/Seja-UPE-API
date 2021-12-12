import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";
import { SsaGradeModel } from "./ssa-grade.model";
import { ProfessorModel } from "./professor.model";
import { SisuGradeModel } from "./sisu-grade.model";
import { PopularityModel } from "./popularity.model";

import {
  OasAboutCourseProperty,
  OasExpertiseAreasCourseProperty,
  OasHistoryCourseProperty,
  OasIngressCourseProperty,
  OasJobMarketCourseProperty,
  OasNameCourseProperty,
  OasPpcCourseProperty,
  OasProfileCourseProperty
} from "src/docs/decorators";

export type CourseField = keyof CourseModel;

@Entity({ name: "tbl_course" })
export class CourseModel extends BaseModel {

  @OasNameCourseProperty()
  @Column()
  public name: string;
  
  @OasAboutCourseProperty()
  @Column()
  public about: string;
  
  @OasProfileCourseProperty()
  @Column()
  public profile: string;
  
  @OasHistoryCourseProperty()
  @Column()
  public history: string;
  
  @OasExpertiseAreasCourseProperty()
  @Column()
  public expertiseAreas: string;
  
  @OasJobMarketCourseProperty()
  @Column()
  public jobMarket: string;
  
  @OasIngressCourseProperty()
  @Column()
  public ingress: string;

  @OasPpcCourseProperty()
  @Column()
  public ppcUrl: string;

  @ManyToOne(() => CampusModel, campus => campus.courses)
  public campus: CampusModel;

  @OneToMany(() => SsaGradeModel, grade => grade.course)
  @JoinColumn()
  public ssaGrades: SsaGradeModel[];

  @OneToMany(() => SisuGradeModel, grade => grade.course)
  @JoinColumn()
  public sisuGrades: SisuGradeModel[];

  @OneToMany(() => PopularityModel, popularity => popularity.course)
  @JoinColumn()
  public popularity: PopularityModel[];

  @OneToMany(() => ProfessorModel, professor => professor.course)
  @JoinColumn()
  public professors: ProfessorModel[];

}