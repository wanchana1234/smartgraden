const express = require('express');
const SerialPort = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// ✅ ใช้รูปแบบใหม่ของ SerialPort และ ReadlineParser
const port = new SerialPort.SerialPort({ path: 'COM8', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

parser.on('data', (data) => {
  console.log('Moisture:', data);
  io.emit('moisture', data);
});

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});