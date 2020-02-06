import React from 'react';
import './Point.scss';

const Point = (props) => {
  const { posX, posY, user, game, record, dispatch, pointData } = props;
  const turn = game.turn > 0 ? 'black' : 'white';
  
  const stone = () => {
    if (pointData === 1) return 'black'
    if (pointData === -1) return 'white'
    return 'none'
  }

  const dot = () => {
    if (pointData === 'l') return game.turn;
  }

  const xFlag = () => {
    if ( posX === 1 ) return `board__point--top`
    if ( posX === game.boardSize ) return `board__point--bottom`
    return '';
  }
  const yFlag = () => {
    if ( posY === 1 ) return `board__point--left`
    if ( posY === game.boardSize ) return `board__point--right`
    return '';
  }
  const clickHandle = (e) => {
    const action = {
      type: 'SOCKET',
      message: 'MAKE_MOVE',
      body: {
        user,
        game,
        room: game.room,
        board: {},
        move: { player: turn, pos: { x: posX, y: posY } }
      }
    }
    dispatch(action);
  }

  return (
    <div 
      className={`board__point ${xFlag()} ${yFlag()}`}
      onClick={e => clickHandle(e)}
    >
      <div className="board__point__stone" 
        data-stone={stone()}
      >
        <div className="board__point__dot" data-dot={dot()}></div>
      </div>

    </div>
  );
}

export default Point;