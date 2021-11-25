import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";

export type SocialNetwork = "instagram" | "facebook" | "youtube" | "twitter";

@Entity({ name: 'tbl_social' })
export class SocialModel extends BaseModel {

  @ApiProperty()
  @Column()
  public name: SocialNetwork;

  @ApiProperty()
  @Column()
  public value: string;

  @ManyToOne(() => CampusModel, campus => campus.events)
  public campus: CampusModel;

}