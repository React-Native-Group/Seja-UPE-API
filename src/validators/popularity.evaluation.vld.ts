import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsIn, IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { PopularityType } from "src/models";

export class PopularityValidator {

  @ApiProperty()
  @IsInt()
  @IsDefined()
  @IsPositive()
  public courseId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['like', 'dislike'])
  public value: PopularityType;

}