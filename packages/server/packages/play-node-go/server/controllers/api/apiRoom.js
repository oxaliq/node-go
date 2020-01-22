const roomQueries = require('../../data/queries/room');
const messageQueries = require('../../data/queries/message');
const {enableRoomSocket} = require('../../socket');

const getAll = async (req, res, next) => {
  try {
    // TODO eventually add check for user's private rooms
    const publicRooms = await roomQueries.findPublicRooms();
    enableRoomSocket(1)
    res.status(200).json({rooms: publicRooms})
  }

  catch (err) {
    res.status(500).json(err);
  }
}

const show = async (req, res, next) => {
  try {
    const roomId = req.params.id;
    const roomGames = await roomQueries.findRoomById(roomId);
    const messages = await messageQueries.findMessageByRoom(roomId);
    const body = {roomGames, messages};
    res.status(200).json(body);
  }
  catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getAll,
  show
}