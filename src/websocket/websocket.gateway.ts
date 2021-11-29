import { WebSocket } from 'ws';
import { MessageBody } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

@WebSocketGateway()
export class WebSockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  public clients: WebSocket[] = [];
  
  handleConnection(client: WebSocket, ...args: any[]) 
  {
    this.clients.push(client);
  }
  
  handleDisconnect(client: any) 
  {
    let k = this.clients.indexOf(client);
    this.clients.splice(k, 1);
  }

  @SubscribeMessage('broadcast')
  onBroadcast(@MessageBody() data: any)
  {
    this.clients.forEach(s => s.send(JSON.stringify(data)));
  }

}