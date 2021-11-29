import { Module } from '@nestjs/common';
import { WebSockGateway } from 'src/websocket';

@Module({
  providers: [WebSockGateway],
  exports: [WebSockGateway]
})
export class WebsocketModule {}
