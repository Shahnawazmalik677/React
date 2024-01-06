import { useState } from 'react'
import "./App.css"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen fixed" style={{backgroundColor:color}}></div>
     <div className="button">
        <button className="bt"  onClick={()=>setColor("blue")}>Blue</button>
        <button className="bt"  onClick={()=>setColor("green")}>Green</button>
        <button className="bt"  onClick={()=>setColor("white")}>White</button>
        <button className="bt"  onClick={()=>setColor("orange")}>Orange</button>
        <button className="bt"  onClick={()=>setColor('brown')}>Brown</button>
        <button className="bt"  onClick={()=>setColor("blue")}>Black</button>
      </div>
    </>
  )
}

export default App
