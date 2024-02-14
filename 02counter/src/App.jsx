import { useState } from 'react';
import './App.css'

function App() {
 const [counter, setcounter] = useState(10);
  const addCounter = () =>{
    setcounter(counter + 1);
  }
  const decCounter = () =>{
    setcounter(counter - 1);
  }
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addCounter}>Add Counter {counter}</button>      
      <button onClick={decCounter}>Decrease Counter {counter}</button>      
    </>
  )
}

export default App
