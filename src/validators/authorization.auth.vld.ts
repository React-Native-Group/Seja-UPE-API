import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class AuthorizationValidator {

  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  public idToken: string;

}