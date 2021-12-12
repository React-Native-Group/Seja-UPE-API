import { Controller, Get } from "@nestjs/common";
import { ApiExcludeController, ApiExcludeEndpoint } from "@nestjs/swagger";

@ApiExcludeController()
@Controller("loaderio-022767dc0449f0ebeaecc33271dc3004")
export class StresserController {

  @Get()
  @ApiExcludeEndpoint()
  onLoaderAuthorize()
  {
    return "loaderio-022767dc0449f0ebeaecc33271dc3004";
  }

}
