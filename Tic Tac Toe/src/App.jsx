import { useState } from 'react'

import './App.css'
import TicTacToe from './TicTacToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Tic Tac Toe</h1>
    <TicTacToe  />
    </>
  )
}

export default App
