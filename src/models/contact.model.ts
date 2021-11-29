import { Column, Entity, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";

export type ContactField = keyof ContactModel;

@Entity({ name: 'tbl_contact' })
export class ContactModel extends BaseModel {

  @ApiProperty()
  @Column()
  public categoryName: string;

  @ApiProperty()
  @Column()
  public fieldIcon: string;

  @ApiProperty()
  @Column()
  public value: string;

  @ManyToOne(() => CampusModel, campus => campus.events)
  public campus: CampusModel;

}