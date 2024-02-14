import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [alphabtsAllowed, setAlphabtsAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() =>{
    let pass=""
    let str="ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(alphabtsAllowed) str+="!@#$%^&*()_+"

    for (let index = 1; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  },[length, numberAllowed, alphabtsAllowed])

  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, alphabtsAllowed])
  
  const copytoclipboar = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className="flex justify-center">
      <div>
        <h1>Password generator</h1>
        <input type="text" name="" id="" readOnly value={password} ref={passwordRef}/>
        <button className="px-3 py-2 bg-blue-400 rounded-lg ml-3" onClick={copytoclipboar}>Copy</button>
        <div className="row">
          <input type="range" name="" id="rangeInput" min={6} max={15} onChange={(e) => setLength(e.target.value)} value={length}/>
          <label htmlFor="rangeInput">Length : {length}  </label>
          <input type="checkbox" name="" id="numberOnly" defaultChecked={numberAllowed} onChange={() =>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor="numberOnly">Numbers Only</label>
          <input type="checkbox" name="" id="alphabetsOnly" defaultChecked={alphabtsAllowed} onChange={() =>{setAlphabtsAllowed((prev) => !prev)}}/>
          <label htmlFor="alphabetsOnly">Alphabets Only</label>
        </div>
      </div>
    </div>
  );
}

export default App;
