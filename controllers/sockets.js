
const LIST = [];

const mini = socket => socket.id;

const Sockets = {
  add(socket) {
    socket.index = LIST.length;
    LIST.push(socket);
    console.log('Adding', LIST.map(mini));
  },

  remove(socket) {
    LIST[socket.index] = {};
    console.log('Removing', LIST.map(mini));
  },

  messageHandler(data) {
    console.log(data);
  },
};

module.exports = {
  onConnection(socket) {
    socket.on('disconnect', () => {
      console.log('USER: Disconnected');
      Sockets.remove(socket);
    });

    socket.on('message', Sockets.messageHandler);

    console.log('USER: Connected');
    Sockets.add(socket);
    socket.broadcast.emit('message', { join: socket.id });
  }
};
