const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on("send", (arg) => {
       
        socket.emit("response",arg);
        
      });
});

server.listen(3100, () => {
  console.log('listening on *:3100');
});