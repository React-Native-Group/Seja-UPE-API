import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";
import { SsaGradeModel } from "./ssa-grade.model";
import { ProfessorModel } from "./professor.model";
import { SisuGradeModel } from "./sisu-grade.model";
import { PopularityModel } from "./popularity.model";

export type CourseField = keyof CourseModel;

@Entity({ name: 'tbl_course' })
export class CourseModel extends BaseModel {

  @ApiProperty()
  @Column()
  public name: string;
  
  @ApiProperty()
  @Column()
  public about: string;
  
  @ApiProperty()
  @Column()
  public profile: string;
  
  @ApiProperty()
  @Column()
  public history: string;
  
  @ApiProperty()
  @Column()
  public expertiseAreas: string;
  
  @ApiProperty()
  @Column()
  public jobMarket: string;
  
  @ApiProperty()
  @Column()
  public ingress: string;

  @ApiProperty()
  @Column()
  public ppcUrl: string;

  @ManyToOne(() => CampusModel, campus => campus.events)
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