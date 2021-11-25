import { Column } from "typeorm";
import { IsDefined, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseModel } from "./base.model";

export class AuthorizationModel extends BaseModel {

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Column()
  public idToken: string;

  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  @Column()
  public userEmail: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @Column()
  public nonce: string;

}