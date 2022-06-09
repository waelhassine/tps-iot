import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { AuthService } from '../../auth/service/auth.service';
import { Socket, Server } from 'socket.io';
import { UserI } from '../../user/model/user.interface';
import { UserService } from '../../user/service/user-service/user.service';
import {UnauthorizedException } from '@nestjs/common';





@WebSocketGateway({
  cors: {
    origin: '*',
    transports: [ 'websocket'],
    
  },allowEIO3: true,
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

 

  async handleConnection(socket: Socket) {
    // try {
    //   const decodedToken = await this.authService.verifyJwt(socket.handshake.headers.authorization);
    //   const user: UserI = await this.userService.getOne(decodedToken.user.id);
    //   if (!user) {
    //     return this.disconnect(socket);
    //   } else {
    //     socket.data.user = user;
       
    //   }
    // } catch {
    //   return this.disconnect(socket);
    // }
    console.log('Client connected');
  }

  async handleDisconnect(socket: Socket) {
    // remove connection from DB
   // await this.connectedUserService.deleteBySocketId(socket.id);
    socket.disconnect();
  }

  private disconnect(socket: Socket) {
    socket.emit('Error', new UnauthorizedException());
    socket.disconnect();
  }


}
