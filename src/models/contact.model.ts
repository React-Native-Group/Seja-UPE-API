import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";
import { OasCategoryNamePropery, OasFieldIconPropery, OasValueContactPropery } from "src/docs/decorators";

export type ContactField = keyof ContactModel;

@Entity({ name: 'tbl_contact' })
export class ContactModel extends BaseModel {

  @OasCategoryNamePropery()
  @Column()
  public categoryName: string;

  @OasFieldIconPropery()
  @Column()
  public fieldIcon: string;

  @OasValueContactPropery()
  @Column()
  public value: string;

  @ManyToOne(() => CampusModel, campus => campus.contacts)
  public campus: CampusModel;

}