import { Controller, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { AuthorizeGuard } from "src/security";

@Controller("campus")
@UseGuards(AuthorizeGuard)
@ApiBearerAuth()
export class CampusController {

  

}