import {
   CreateSourceCodeMessage,
   ServerEventKeys,
   SocketMessage,
   UpdateSourceCodeTextMessage,
} from '../config';
import SourceCode from './../db/models/sourceCode';
import { SocketEmitter } from './socketEmitter';

export class SourceCodeSocketEmitter extends SocketEmitter {
   private message: SocketMessage = {};

   public initalizeEvents() {
      this.socket.on(ServerEventKeys.SetSourceCodeText, (message: UpdateSourceCodeTextMessage) => {
         this.message = message;
         this.updateSourceCode();
      });
      this.socket.on(ServerEventKeys.CreateSourceCode, (message: CreateSourceCodeMessage) => {
         this.message = message;
         this.createSourceCode();
      });
   }

   public async updateSourceCode() {
      try {
         const newSourceCode = await SourceCode.findByIdAndUpdate(this.message.id, {
            text: this.message.text,
            updated: Date.now(),
         });
      } catch (err) {
         this.socket.emit('error', { error: err });
      }
   }

   public async createSourceCode() {
      try {
         const newSourceCode = new SourceCode(this.message);
         const result = await newSourceCode.save();
      } catch (err) {
         this.socket.emit('error', { error: err });
      }
   }
}
