const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=> {
    res.send("yesss");
});

const server = app.listen(process.env.PORT || 5000, ()=>{
    console.log("Listening on port 5000")
})


const SocketIO = require('socket.io');
const { Socket } = require('dgram');
const io = SocketIO(server);

const {message} = require('./socket');

io.on('connection', (socket)=>{
    console.log("new connection");
    io.emit('data-assignment',{name:new Date().getTime()})
    
    message(socket,io);
})