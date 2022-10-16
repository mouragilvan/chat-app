const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html');
});

//USERS
let users = new Array();

io.on('connection', (socket) => {    
        
    socket.on("conecting",(uinfo)=>{
        users.push(uinfo);
        io.emit("conected",uinfo);

    });

    socket.on("send", (data) => {
        io.emit("response", data);
    });
    
});



server.listen(3100, () => {
    console.log('listening on *:3100');
});