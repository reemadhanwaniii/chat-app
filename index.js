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
    console.log("A user connected",socket.id);

    // Listens for a custom event from Client
    socket.on('from_client',() => {
        console.log("Event coming from client");
    })

    // Every 2 seconds → sends event to that specific client
   //  This is server push (real-time)
    setInterval(()=>{
        socket.emit("from_server");
    },2000);

});


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});