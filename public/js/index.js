var socket = io();

socket.on('connect', function () {
  console.log('connected to server');
  // socket.emit('createEmail', {
  //   to: 'jen@gmail.com',
  //   text: 'hey, this is param'
  // })
  socket.emit('createMessage', {
    from: 'andrew',
    text: 'hey, wassup??'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});

// socket.on('newEmail', function (email) {
//   console.log('New Email', email);
// });

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
