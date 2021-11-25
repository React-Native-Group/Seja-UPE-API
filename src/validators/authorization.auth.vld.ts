import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class AuthorizationValidator {

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public idToken: string;

}