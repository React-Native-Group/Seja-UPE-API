import { Server, WebSocket } from 'ws';
import { WebSocketServer, MessageBody } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { websockPort } from 'src/config/server.json';

@WebSocketGateway(websockPort)
export class WebSockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  public server: Server;
  public clients: WebSocket[] = [];
  
  handleConnection(client: WebSocket, ...args: any[]) {
    this.clients.push(client);
  }
  
  handleDisconnect(client: any) {
    let k = this.clients.indexOf(client);
    this.clients.splice(k, 1);
  }

  @SubscribeMessage('broadcast')
  onBroadcast(@MessageBody() data: any)
  {
    this.clients.forEach(s => s.send(JSON.stringify(data)));
  }

}