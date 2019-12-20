// tslint:disable: object-literal-sort-keys

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

export type SocketMessage = Partial<CreateSourceCodeMessage & UpdateSourceCodeTextMessage>;

export interface Socket {
   id: string;
   emit: (messageId: string, message?: any) => void;
   on: (messageId: string, message?: any) => void;
   join: (roomName: string) => void;
   to: (roomName: string) => Socket;
   [key: string]: any;
}
