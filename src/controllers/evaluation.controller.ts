import { Body, Controller, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { EvaluationService } from "src/services";
import { PopularityValidator } from "src/validators";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

@ApiBearerAuth()
@ApiTags("Avaliações")
@UseGuards(AuthorizeGuard)
@Controller("evaluation")
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