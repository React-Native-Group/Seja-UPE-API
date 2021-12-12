import { IsDefined, IsIn, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { OasCourseIdProperty, OasValueProperty } from "src/docs/decorators";
import { PopularityType } from "src/models";

export class PopularityValidator {

  @OasCourseIdProperty()
  @IsInt()
  @IsDefined()
  @IsPositive()
  public courseId: number;

  @OasValueProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(["like", "dislike"])
  public value: PopularityType;

}