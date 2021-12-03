import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { CourseService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { OasAppVersionHeader, OasBearerAuth, OasCampusContactsOperation, OasCampusCourseOperation, OasCampusEventsOperation, OasCampusOperation, OasControllerTags } from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Campus")
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  constructor(private courseService: CourseService){}

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Get()
  async onAllCampusRequested()
  {
    return await this.courseService.fetchCampus();
  }

  @OasCampusOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Get(":campusId")
  async onCampusRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampus(campusId);
  }

  @OasCampusCourseOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Get(":campusId/courses")
  async onCampusCoursesRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusCourses(campusId);
  }

  @OasCampusEventsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Get(":campusId/events")
  async onCampusEventsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusEvents(campusId);
  }

  @OasCampusContactsOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @HttpCode(HttpStatus.OK)
  @Get(":campusId/contacts")
  async onCampusContactsRequested(@Param('campusId', ParseIntPipe) campusId: number)
  {
    return await this.courseService.fetchCampusContacts(campusId);
  }

}