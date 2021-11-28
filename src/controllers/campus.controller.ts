import { Controller, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthorizeGuard } from "src/security";

@ApiTags("Campus")
@ApiBearerAuth()
@UseGuards(AuthorizeGuard)
@Controller("campus")
export class CampusController {

  

}