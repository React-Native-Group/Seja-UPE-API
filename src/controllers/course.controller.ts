import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { CourseService, ProfessorService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasCampusIdParam,
  OasControllerTags,
  OasCourseIdParam,
  OasCourseOperation,
  OasProfessorsOperation
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Cursos")
@UseGuards(AuthorizeGuard)
@Controller("courses")
export class CourseController {

  constructor(
    private courseService: CourseService,
    private professorService: ProfessorService){}

  @OasCampusIdParam()
  @OasCourseOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("campus/:campusId/all")
  async onCourseRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCourseIdParam()
  @OasProfessorsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":courseId/professors")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.professorService.fetchCourseProfessors(courseId);
  }

}