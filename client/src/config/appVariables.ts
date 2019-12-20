import { socketConfig } from './socketConfig';

export interface Socket {
   id: string;
   emit: (messageId: string, message?: any) => void;
   on: (messageId: string, message?: any) => void;
   join: (roomName: string) => void;
   to: (roomName: string) => Socket;
   [key: string]: any;
}

export interface AppVariables {
   socket: Socket;
}

export const appVariables: AppVariables = {
   ...socketConfig,
};

export enum ServerEventKeys {
   GetSourceCode = 'GetSourceCode',
   CreateSourceCode = 'CreateSourceCode',
   SetSourceCodeText = 'SetSourceCodeText',
}

export interface CreateSourceCodeMessage {
   extension: string;
   fileName: string;
   name: string;
   text: string;
}

export interface UpdateSourceCodeTextMessage {
   id: string;
   fileName: string;
   text: string;
}
