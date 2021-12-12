import { IsNotEmpty, IsString } from "class-validator";
import { OasRelationsProperty } from "src/docs/decorators";

export class CampusOptionsValidator {

  @OasRelationsProperty()
  @IsNotEmpty({ each: true})
  @IsString({ each: true })
  public relations: string[];

}