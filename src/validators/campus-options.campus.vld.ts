import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CampusOptionsValidator {

  @ApiProperty()
  @IsNotEmpty({ each: true})
  @IsString({ each: true })
  public relations: string[];

}