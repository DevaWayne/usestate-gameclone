import React from 'react'
import './../index.css'

import Board from './Board'
//invokes board function from board.js

const Game = () => {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
        </div>
      )
}

export default Game
