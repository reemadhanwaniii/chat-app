const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);



server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});