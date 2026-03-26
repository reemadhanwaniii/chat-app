const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

app.use('/',express.static(__dirname+'/public'));

/**
 * -> Triggered when a client connects via Socket.IO
   -> Each client gets a unique socket object
 */
io.on('connection',(socket) => {
   socket.on('msg_send',(data)=>{
     console.log(data);
     socket.broadcast.emit("msg_rcvd",data);
   });
});


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});