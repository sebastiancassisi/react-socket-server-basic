class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvent();
  }

  socketEvent() {
    // On conection
    this.io.on('connection', (socket) => {
      //Escuchar evento
      socket.on('message-to-server', (data) => {
        console.log(data);
        this.io.emit('message-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
