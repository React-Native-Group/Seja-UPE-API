import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { IsLatitude, IsLongitude, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

import { BaseModel } from "./base.model";
import { EventModel } from "./event.model";
import { SocialModel } from "./social.model";
import { CourseModel } from "./course.model";
import { ContactModel } from "./contact.model";
import { OasDescriptionCampusProperty, OasLatitudePropery, OasLongitudePropery, OasNameCampusProperty } from "src/docs/decorators";

export type CampusField = keyof CampusModel;

@Entity({ name: 'tbl_campus' })
export class CampusModel extends BaseModel {

  @OasNameCampusProperty()
  @IsString()
  @Column()
  public name: string;

  @OasDescriptionCampusProperty()
  @IsString()
  @Column()
  public description: string;

  @OasLatitudePropery()
  @IsLatitude()
  @Column()
  public latitude: string;

  @OasLongitudePropery()
  @IsLongitude()
  @Column()
  public longitude: string;

  @OneToMany(() => EventModel, event => event.campus)
  @JoinColumn()
  public events: EventModel[];

  @OneToMany(() => SocialModel, event => event.campus)
  @JoinColumn()
  public socialNetworks: SocialModel[];

  @OneToMany(() => ContactModel, event => event.campus)
  @JoinColumn()
  public contacts: ContactModel[];

  @OneToMany(() => CourseModel, event => event.campus)
  @JoinColumn()
  public courses: CourseModel[];

}