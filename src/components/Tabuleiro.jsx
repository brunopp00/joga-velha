import React from 'react'
import { Quadrado } from './Quadrado'

export function Tabuleiro({ squares, onClick }) {
  const renderQuadrado = (i) => {
    return <Quadrado value={squares[i]} onClick={() => onClick(i)} />
  }

  return (
    <div>
      <div>
        {renderQuadrado(0)}
        {renderQuadrado(1)}
        {renderQuadrado(2)}
      </div>
      <div>
        {renderQuadrado(3)}
        {renderQuadrado(4)}
        {renderQuadrado(5)}
      </div>
      <div>
        {renderQuadrado(6)}
        {renderQuadrado(7)}
        {renderQuadrado(8)}
      </div>
    </div>
  )
}
