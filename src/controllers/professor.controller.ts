import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { AuthorizeGuard, Permission, Permissions } from "src/security";
import { ProfessorService } from "src/services";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasControllerTags,
  OasInvalidObjectResponse,
  OasProfessorOperation,
  OasProfessorsOperation
} from "src/docs/decorators";

@OasBearerAuth()
@OasAppVersionHeader()
@OasControllerTags("Professores")
@UseGuards(AuthorizeGuard)
@Controller("professors")
export class ProfessorController {

  constructor(private professorService: ProfessorService){}

  @OasProfessorsOperation()
  @OasInvalidObjectResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get()
  async onProfessorsRequested()
  {
    return await this.professorService.fetchProfessors();
  }

  @OasProfessorOperation()
  @OasInvalidObjectResponse()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":professorId")
  async onProfessorRequested(@Param('professorId', ParseIntPipe) professorId: number)
  {
    return await this.professorService.fetchProfessorById(professorId);
  }

}