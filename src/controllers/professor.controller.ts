import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { ProfessorService } from "src/services";
import { AuthorizeGuard, Permission, Permissions } from "src/security";

import {
  OasAppVersionHeader,
  OasBearerAuth,
  OasControllerTags,
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
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get()
  async onProfessorsRequested()
  {
    return await this.professorService.fetchProfessors();
  }

  @OasProfessorOperation()
  @Permissions(Permission.DEFAULT_LEVEL)
  @Get(":professorId")
  async onProfessorRequested(@Param('professorId', ParseIntPipe) professorId: number)
  {
    return await this.professorService.fetchProfessorById(professorId);
  }

}