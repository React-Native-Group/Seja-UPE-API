import { Column, Entity } from "typeorm";
import { IsDefined, IsInt, Max, Min } from "class-validator";
import { BaseModel } from "./base.model";
import { ApiProperty } from "@nestjs/swagger";

export type RatingField = keyof RatingModel;

@Entity({ name: 'tbl_rating' })
export class RatingModel extends BaseModel {

  @ApiProperty()
  @IsDefined()
  @IsInt()
  @Min(1)
  @Max(5)
  @Column()
  public note: number;
  
}