import { Controller, Get, Param, ParseIntPipe, UseGuards, UseInterceptors } from "@nestjs/common";
import { CourseService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasControllerTags,
  OasCourseIdParam,
  OasProfessorsOperation
} from "src/docs/decorators";
import { CacheRequestInterceptor } from "src/hooks";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Professores")
@UseInterceptors(CacheRequestInterceptor)
@UseGuards(AuthorizeGuard)
@Controller("professors")
export class ProfessorController {

  constructor(private courseService: CourseService){}

  @OasCourseIdParam()
  @OasProfessorsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("course/:courseId")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.courseService.fetchCourseProfessors(courseId);
  }

}