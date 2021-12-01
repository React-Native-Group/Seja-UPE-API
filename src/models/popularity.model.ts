import { Column, Entity, ManyToOne } from "typeorm";
import { CourseModel } from "./course.model";
import { BaseModel } from "./base.model";
import { OasValuePopularityProperty } from "src/docs/decorators";

export type PopularityType = 'like' | 'dislike';

export type PopularityField = keyof PopularityModel;

@Entity({ name: 'tbl_popularity' })
export class PopularityModel extends BaseModel {

  @OasValuePopularityProperty()
  @Column()
  public value: PopularityType;

  @ManyToOne(() => CourseModel, course => course.popularity)
  public course: CourseModel;

}