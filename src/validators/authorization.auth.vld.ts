import { IsDefined, IsNotEmpty, IsString } from "class-validator";
import { OasIdTokenProperty } from "src/docs/decorators";

export class AuthorizationValidator {
  
  @OasIdTokenProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public idToken: string;

}