const User = require('./user');

let list = [];
class UsersList{

    constructor(){
        this.list = [];
    }
    add(user){
        this.list.push(user);
        return user;
    }

    updateName(id, name){
        for( let user of this.list ) {

            if ( user.id === id ) {
                user.name = name;
                break;
            }

        }
    }

    // Obtener lista de usuarios
    getList() {
        return this.list;
    }

    // Obtener un usuario
    getUser( id ) {

        return this.list.find( user => user.id === id );

    }

    // Obtener usuario en una sala en particular
    getUsersInRoom( room ) {

        return this.list.filter( user =>user.room === room );

    }

    // Borrar Usuario
    deleteUser( id ) {

        const tempUser = this.getUser( id );

        this.list = this.list.filter( user => user.id !== id );

        return tempUser;
        
    }
}

module.exports = UsersList;