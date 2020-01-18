// TODO const someSocketLogic = require('./middleware/socketssockets/...');

module.exports = {
  enableSocket: io => {
    io.on('connection', ()=> {
      io.emit('connected', {message: 'socket connected'});
    })

    // TODO io = someSocketLogic(io);

    return io;
  }
}