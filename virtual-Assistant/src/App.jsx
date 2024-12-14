import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
function App() {
  let {recognition}=useContext(datacontext)
  
  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra,Your Advanced virtual Assistant</span>
      <button onClick={()=>{
        recognition.start()
      }}>
        Click here
        <CiMicrophoneOn />
      </button>
    </div>
  );
}

export default App