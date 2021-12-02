import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { CourseService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasControllerTags,
  OasCourseIdParam,
  OasProfessorsOperation
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Professores")
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
    return await this.courseService.fetchProfessors(courseId);
  }

}