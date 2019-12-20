import { Socket } from './../../client/src/config/appVariables';

export class SocketEmitter {
   public socket: Socket;
   constructor(socket: Socket) {
      this.socket = socket;
   }
}
