import React, { useState } from 'react'
import { Tabuleiro } from './Tabuleiro'

export function Jogo() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const newSquares = squares.slice()
    if (calculateWinner(newSquares) || newSquares[i]) {
      return
    }
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'Vencedor: ' + winner
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O')
  }

  const handleReset = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <Tabuleiro squares={squares} onClick={handleClick} />
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-white">{status}</h2>
        </div>
        <button
          className="bg-emerald-500 text-white p-3 mt-2 rounded-md transition-opacity hover:opacity-40"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
