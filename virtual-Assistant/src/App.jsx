import React from 'react'
import "./App.css"
import va from "./assets/ai.png"
import { CiMicrophoneOn } from "react-icons/ci";
function App() {
  return (
    <div className="main">
      <img src={va} alt="" id="shifra" />
      <span>I'm Shifra,Your Advanced virtual Assistant</span>
      <button>
        Click here
        <CiMicrophoneOn />
      </button>
    </div>
  );
}

export default App