import React, { Children, createContext } from 'react'
export const datacontext=createContext()

function UserContext({children}) {
    function speak(text){
        let text_speak=new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="en-GB"
        window.speechSynthesis.speak(text_speak)
    }
/*speechRecgniton*/

    let speechRecognition=window.speechRecognition || window.webkitSpeechRecognition
    let recognition=new speechRecognition()
        recognition.onresult=(e)=>{
            let currentIndex=e.resultIndex
            let transcript=e.results[currentIndex][0].transcript
            console.log(transcript);

        }
    
    let value = {
        recognition
    }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  );
}

export default UserContext