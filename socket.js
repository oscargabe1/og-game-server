const message = (socket,io)=>{
    socket.on('message', (data)=>{
        console.log("did bruh");
        console.log(data);
        io.emit('new-message',data);
    })
}

module.exports = {
    message
};