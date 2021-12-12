import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { CampusModel } from "./campus.model";
import { IsNotEmpty, IsString } from "class-validator";
import { OasNameSocialProperty, OasValueSocialProperty } from "src/docs/decorators";

export type SocialNetwork = "instagram" | "facebook" | "youtube" | "twitter";

export type SocialField = keyof SocialModel;

@Entity({ name: "tbl_social" })
export class SocialModel extends BaseModel {

  @OasNameSocialProperty()
  @IsNotEmpty()
  @Column()
  public name: SocialNetwork;

  @OasValueSocialProperty()
  @IsString()
  @IsNotEmpty()
  @Column()
  public value: string;

  @ManyToOne(() => CampusModel, campus => campus.socialNetworks)
  public campus: CampusModel;

}