import { Column, Entity } from "typeorm";
import { IsDefined, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";
import { BaseModel } from "./base.model";

@Entity({ name: 'tbl_authorization' })
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
  public email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @Column()
  public sub: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @Column()
  public atHash: string;

  @IsInt()
  @IsNotEmpty()
  @IsDefined()
  @Column()
  public iat: number;

  @IsInt()
  @IsNotEmpty()
  @IsDefined()
  @Column()
  public exp: number;

}