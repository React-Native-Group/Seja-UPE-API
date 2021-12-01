import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";
import { OasLinkEventProperty, OasNameEventProperty } from "src/docs/decorators";

export type EventField = keyof EventModel;

@Entity({ name: 'tbl_event' })
export class EventModel extends BaseModel {
  
  @OasNameEventProperty()
  @Column()
  public name: string;

  @OasLinkEventProperty()
  @Column()
  public link: string;

  @ManyToOne(() => CampusModel, campus => campus.events)
  public campus: CampusModel;

}