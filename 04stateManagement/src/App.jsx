import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState("black")

  return (
    <>
      <div className="card tw-w-screen tw-h-screen" style={{backgroundColor: count}}>
        <div className='tw-flex tw-justify-center tw-gap-4 tw-bg-white tw-fixed tw-top-2/4 tw-left-1/3'>
          <button className='tw-bg-yellow-400' onClick={() => setCount("yellow")}>Yellow</button>
          <button className='tw-bg-blue-500' onClick={() => setCount("blue")}>Blue</button>
          <button className='tw-bg-red-700' onClick={() => setCount("red")}>Red</button>
        </div>
      </div>
    </>
  )
}

export default App
