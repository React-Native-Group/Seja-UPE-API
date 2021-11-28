import { Body, Controller, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Permission, Permissions } from "src/security";
import { EvaluationService } from "src/services";
import { PopularityValidator } from "src/validators";

@Controller('evaluation')
export class EvaluationController {

  constructor(private evaluationService: EvaluationService){}

  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("/rating/survey/:note")
  async onRatingSent(@Param('note', ParseIntPipe) note: number)
  {
    return await this.evaluationService.submitRating(note);
  }

  @Permissions(Permission.DEFAULT_LEVEL)
  @Post("popularity/course")
  async onPopularitySent(@Body() data: PopularityValidator)
  {
    return await this.evaluationService.submitCoursePopularity(data);
  }

}