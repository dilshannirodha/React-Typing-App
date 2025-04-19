import React, { useContext, useEffect,useState } from 'react'
import { GetValuesContext } from '../../context/GetValuesContext'



const GameResult = () => {
    const {setCurrentIndex,setWrongGameIndex,
          setIndex, setStartGame,win,setWin,
          setUserGameInput, setGameResults} = useContext(GetValuesContext);
    const [buttonClicked, setButtonClicked] = useState(false);
   

    const testAgain = () => {
      setButtonClicked(!buttonClicked);
    }

    useEffect(()=>{
      if(buttonClicked) {
        setGameResults(false);
        setStartGame(false);
        setWin(false);
      setCurrentIndex(0);
      setIndex(0);
      setUserGameInput('');
      setWrongGameIndex([]);

      }
    })

  

  return (
    <div class="flex items-center justify-center flex-col">
        <div class="flex items-center justify-center space-x-20 p-20 text-white">
            {win && (
              <span class="text-white text-lg">You Win!</span>
            )}
            {!win && (
              <span class="text=white text-lg" > You Lose!</span>
            )}
            
        
        </div>
      
        <div class="inline-block  rounded text-white p-2 bg-blue-700">
            <button onClick={testAgain}>Test again</button>
        </div>

    </div>

  )
}

export default GameResult
