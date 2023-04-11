//Node server which will handle socket.io connection
const io = require('socket.io')(5501)
const users= {};
io.on('connection', socket=>{
    socket.on('new-user-joined', name=>{
        console.log('new user' , name)
        users[socket.id]= name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send', message=>{
        socket.broadcast.emit('receiver',{ message:message, name: user[socket.io]})
    });

})