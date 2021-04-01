import React, {useState} from 'react'
import './../index.css'

//functions of board
const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [XIsNext, setXIsNext] = useState(true)
    const [status, setStatus] = useState('X turn')
    const [end, setEnd] = useState(false)

//functions for individual squares
    const Square = (props) => {
        return (
          <button className="square" onClick={props.onClick}>
            {props.value}
          </button>
        );
      }
//triggers when clicked
    const handleClick = (i) => {
        let squares_ = squares

        if (!squares_[i] && !end) {
            squares_[i] = XIsNext ? 'X' : 'O'
            setSquares(squares_)
            setXIsNext(!XIsNext)

            const occ = squares_.filter(Boolean).length
            const winner = calculateWinner(squares.slice())

            if(winner) {
                setStatus(`${winner} is the winner`)
                setEnd(true)
            } else {
                if(occ === 9) {
                    setStatus(`Draw`)
                    setEnd(true)
                } else {
                    setStatus(`${XIsNext ? 'O' : 'X'} turn`)
                }
            }
        }

    }
//calculates the squares, determining the winner
    const calculateWinner = squares_ => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares_[a] && squares_[a] === squares_[b] && squares_[a] === squares_[c]) {
              return squares_[a];
            }
          }
          return null
    }

    const renderSquare = i => {
        return (
          <Square value={squares[i]} onClick={() => handleClick(i)}
        />
      )
    }

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      )
}

export default Board
