// tslint:disable: no-console
import { Socket } from './config';
import { runEsLinter } from './middleware/linters/eslinter';
import { Queue } from './middleware/queue';
import { SourceCodeSocketEmitter } from './socketRoutes/sourceCode';
// tslint:disable-next-line: no-unused-expression
'use strict';

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
dotenv.config({ path: './.env' });

mongoose.connect(process.env.MONGO_DB_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('connected to db.'))
  .catch((err) => console.log(err));

const middlewareQueue = new Queue();
middlewareQueue.add({ run: runEsLinter, key: 'eslinter' }, 1);

const PORT = process.env.PORT;

const INDEX = path.join(__dirname, '../client/build/index.html');

const server = express()
  .use(cors())
  .use(express.static(path.join(__dirname, '../client/build/')))
  .use((req, res) => res.sendFile(INDEX))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', (socket: Socket) => {

  console.log('connected');
  const sourceCodeEmitter = new SourceCodeSocketEmitter(socket);
  sourceCodeEmitter.initalizeEvents();

  // socket.on('disconnect', () => {});
});
