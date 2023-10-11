import React from 'react'

export function Quadrado({ value, onClick }) {
  return (
    <button
      className="bg-emerald-600 m-2 w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-lg text-white transition-opacity hover:opacity-50"
      onClick={onClick}
    >
      <h1>{value}</h1>
    </button>
  )
}
