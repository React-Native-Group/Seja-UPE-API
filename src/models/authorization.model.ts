import { Column, Entity } from "typeorm";
import { IsDefined, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { BaseModel } from "./base.model";

@Entity({ name: 'tbl_authorization' })
export class AuthorizationModel extends BaseModel {

  @IsString()
  @IsNotEmpty()
  @Column()
  public idToken: string;

  @IsEmail()
  @IsNotEmpty()
  @Column()
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  public sub: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  public atHash: string;

  @IsInt()
  @IsNotEmpty()
  @Column()
  public iat: number;

  @IsInt()
  @IsNotEmpty()
  @Column()
  public exp: number;

}