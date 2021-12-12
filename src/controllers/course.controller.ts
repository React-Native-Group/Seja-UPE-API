import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { CourseService, ProfessorService } from "src/services";

import {
  OasAllCoursesOperation,
  OasAllCoursesResponse,
  OasAppVersionHeader,
  OasBearerAuth,
  OasCampusIdParam,
  OasControllerTags,
  OasCourseIdParam,
  OasCourseOperation,
  OasCourseProfessorsOperation,
  OasCourseProfessorsResponse,
  OasCoursesResponse,
  OasForbiddenResponse,
  OasInvalidObjectResponse,
  OasRequestTimeoutResponse
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasInvalidObjectResponse()
@OasRequestTimeoutResponse()
@OasForbiddenResponse()
@OasControllerTags("Cursos")
@UseGuards(AuthorizeGuard)
@Controller("courses")
export class CourseController {

  constructor(
    private courseService: CourseService,
    private professorService: ProfessorService){}

  @OasAllCoursesOperation()
  @OasAllCoursesResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get()
  async onAllCoursesRequested()
  {
    return await this.courseService.fetchCourses();
  }

  @OasCampusIdParam()
  @OasCourseOperation()
  @OasCoursesResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get("campus/:campusId/all")
  async onCourseRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCourseIdParam()
  @OasCourseProfessorsOperation()
  @OasCourseProfessorsResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":courseId/professors")
  async onProfessorsRequested(@Param('courseId', ParseIntPipe) courseId: number)
  {
    return await this.professorService.fetchCourseProfessors(courseId);
  }

}