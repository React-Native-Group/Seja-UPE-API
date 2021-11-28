import { Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Permission, Permissions } from "src/security";

@Controller('evaluation')
export class EvaluationController {

  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("/rating/survey/:note")
  onRatingSent(@Param('note', ParseIntPipe) note: number){
    console.log(note)
  }

  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("popularity/:courseId")
  onPopularitySent(@Param('courseId', ParseIntPipe) courseId: number){
    
  }

}