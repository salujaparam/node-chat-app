const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
// console.log(__dirname + '/../public');
// console.log(publicPath);

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('new user connected');

  // socket.emit('newEmail', {
  //   from: 'saluja@gmail.com',
  //   text: 'hey, this is param',
  //   createdAt:123
  // });

  socket.emit('newMessage', {
    from: 'john',
    text: 'see you then',
    createdAt: 123
  });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('createEmail', newEmail);
  // });
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', (socket) => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
