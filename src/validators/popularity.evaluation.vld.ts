import { IsDefined, IsIn, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { PopularityType } from "src/models";

export class PopularityValidator {

  @IsInt()
  @IsDefined()
  @IsPositive()
  public courseId: number;

  @IsNotEmpty()
  @IsString()
  @IsIn(['like', 'dislike'])
  public value: PopularityType;

}