const UsersList = require('../classes/users-list');
const connectedUsers = new UsersList();

const message = (socket,io)=>{
    socket.on('message', (data)=>{
        console.log("did bruh");
        console.log(data);
        io.emit('new-message',data);
    })
}

const userConfig = (socket,io)=>{

    socket.on('user-config', (  payload, callback  ) => {

        connectedUsers.updateName(socket.id, payload.name);
        
        callback({
            ok: true,
            mensaje: `Usuario ${ payload.nombre }, configurado`
        });
    });
}

module.exports = {
    message,
    userConfig
};