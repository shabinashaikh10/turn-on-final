const socket = io('http://localhost:5501');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container')

const name =  prompt("enter ur name to join");
socket.emit('new-user-joined', name)