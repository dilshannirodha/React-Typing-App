import React, { useContext,useEffect } from 'react'
import TypingGameSettings from './GameComponents/TypingGameSettings'
import { GetValuesContext } from '../context/GetValuesContext';
import DisplayGameWords from './GameComponents/DisplayGameWords';
import UserGameInput from './GameComponents/UserGameInput';
import GameResult from './GameComponents/GameResult';
import GameStats from './GameComponents/GameStats';


const TypingGame = () => {

  const {selectedSpeed,setIndex,startGame, gameResults

        } = useContext(GetValuesContext);

  useEffect(() => {
    if(startGame){
      const intervalIndex = (1000*60/(selectedSpeed*4.5)) ;
    const updateIndex = () => {
      setIndex(prevIndex => prevIndex + 1);
    };
    const intervalId = setInterval(updateIndex, intervalIndex);
    return () => {
      clearInterval(intervalId);
    };
    }
    
  }, [selectedSpeed,startGame, gameResults, setIndex]);



  return (
   <>
   {!gameResults && (
    <div class="flex flex-col justify-center items-center bg-gray-900 p-10 space-y-10">
  
    <GameStats />
    <TypingGameSettings />

    
    <DisplayGameWords />
    <UserGameInput />

  
  </div>
   )}

   {
    gameResults && (
      <div>
        <GameResult />
      </div>
    )
   }
   </>
  )
}

export default TypingGame
