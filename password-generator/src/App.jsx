import { useState,useEffect,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false);
  const [password,setPassword]=useState("");

  const passGenerator=useCallback(()=>{
  
    console.log("changed")
    let password="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let finalPassword="";
     if(number)password+='123456789';
     if(char)password+='@#$%^&*()!?~';
     for(let i=1;i<=length;i++){
          let index=Math.floor((Math.random()*password.length)+1);
          console.log(index);
          finalPassword+=password[index];
     }
     setPassword(finalPassword)
  }
  )

useEffect(()=>{
  passGenerator();
},[length,number,char])

  return (
    <>
      <h1 className="text-center text-4xl text-white">Password Generator</h1>
      <input
      className="bg-green-400 w-96" 
      value={password}
      type="text" readOnly/>
      <button
      onClick={()=>{
        window.navigator.clipboard.writeText(password);
      }}
       className="bg-slate-500">Copy</button>

      <div className="flex justify-center mt-2">
      <div className="w-fit"
      style={{backgroundColor:'grey'}}>
        <input
        type="range"
        min={8}
        max={100}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
        <input onClick={()=>{setNumber((prev)=>!prev)}}
        type="checkbox"/>
        <label htmlFor="">Numbers</label>
        <input 
        onClick={()=>{setChar((prev)=>!prev)}}
        type="checkbox" name="" id="" />
        <label 
        htmlFor="">Characters</label>
      </div>
      </div>

    
    </>
  )
}

export default App
