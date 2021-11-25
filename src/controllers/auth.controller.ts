import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("authentication")
@Controller("auth")
export class AuthController {

  @Get("")
  onAuthRequested(){

  }

}
