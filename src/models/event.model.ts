import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";

@Entity({ name: 'tbl_event' })
export class EventModel extends BaseModel {
  
  @ApiProperty()
  @Column()
  public name: string;

  @ApiProperty()
  @Column()
  public link: string;

  @ManyToOne(() => CampusModel, campus => campus.events)
  public campus: CampusModel;

}