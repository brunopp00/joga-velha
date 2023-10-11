import {} from 'react'
import { Jogo } from './components/Jogo'

function App() {
  return (
    <div className="w-screen flex flex-col items-center">
      <header>
        <h1 className="text-emerald-500">Jogo da Velha</h1>
      </header>
      <main>
        <Jogo />
      </main>
    </div>
  )
}

export default App
