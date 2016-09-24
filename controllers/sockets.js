
const LIST = [];

const mini = (socket) => {
  return socket.id;
};

const Sockets = {
  add(socket) {
    socket.index = LIST.length;
    LIST.push(socket);
    console.log('Adding', LIST.map(mini));
  },

  remove(socket) {
    LIST[socket.index] = {};
    console.log('Removing', LIST.map(mini));
  }
};

module.exports = {
  onConnection(socket) {
    socket.on('disconnect', () => {
      console.log('USER: Disconnected');
      Sockets.remove(socket);
    });

    console.log('USER: Connected');
    Sockets.add(socket);
  }
};
