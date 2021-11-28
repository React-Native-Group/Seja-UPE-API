import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { CourseModel } from "./course.model";
import { BaseModel } from "./base.model";

export type PopularityType = 'like' | 'dislike';

@Entity({ name: 'tbl_popularity' })
export class PopularityModel extends BaseModel {

  @ApiProperty()
  @Column()
  public value: PopularityType;

  @ManyToOne(() => CourseModel, course => course.popularity)
  public course: CourseModel;

}