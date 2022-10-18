let users = [];

const addUser = (userId, socketId) => {
    console.log('arr :'+ users, 'userId: ' + userId[0])
    !users.some((user) => userId === user.userId) && users.push({userId, socketId})
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

module.exports = (io) => {
    io.on('connection', (socket ) => {
        console.log('user id: ' + socket.id)

        //añade un usuario conectado
        socket.on("addUser", (userId) => {
            console.log(userId)
            addUser(userId, socket.id);
            console.log(users)

            io.emit("getUsers", users);
        });

         //enviar y recibir notifaciones
    socket.on("sendNotification", ({sendId, receiverId, infoNoti}) => {
        console.log(receiverId)
        console.log(infoNoti)
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getNotification", {
            sendId,
            infoNoti
        })
    })

    socket.on("disconnect", () => {
        console.log("a user disconnected")
        removeUser(socket.id);
        io.emit("getUsers", users)    
    })
    })
}