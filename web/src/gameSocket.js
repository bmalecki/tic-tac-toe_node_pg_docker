const socketIo = require('socket.io');

module.exports = (http) => {
  const io = socketIo(http);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('CREATE_ROOM', ({ player, sign, roomid }) => {
      console.log(`${player} as '${sign}' creates room ${roomid}`);
      socket.join(roomid);
    });

    socket.on('JOIN_ROOM', ({ player, sign, roomid }, fn) => {
      console.log(`${player} as '${sign}' joins to room ${roomid}`);
      socket.join(roomid);
      io.in(roomid).emit('PLAY_GAME', { roomid });
      fn();
    });


    socket.on('destroy', () => {
      socket.disconnect(true);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


  return io;
};

