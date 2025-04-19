import { useContext, useEffect } from 'react'
import { GetValuesContext } from '../../context/GetValuesContext'



const UserGameInput = () => {
    const {
        userGameInput,setUserGameInput,startGame,setStartGame,setIndex,gameInput,setGameResults,
        setCurrentIndex, wordShuffle, setWordShuffle,currentIndex,displayedGameWords,index,
        setChar,setCheckGameWord,setWrongGameIndex,setGameCharCount
        ,setWin
   
      } = useContext(GetValuesContext);

    useEffect(() =>{
        if(gameInput.current) gameInput.current.focus();
    })

    useEffect(() => {
      if (index !== 0) {
        const totalChars = displayedGameWords.reduce((acc, word) => acc + word.length, 0);
        if (index === totalChars) {
          if (index < totalChars) setWin(false);
          setGameResults(true);
        }
      }
    }, [index, displayedGameWords, setWin, setGameResults]);

const handleUserGameInput = (event) => {
    setUserGameInput(event.target.value);
    if(!startGame) setStartGame(true);
   
    if((currentIndex !== displayedGameWords.length ) || (index < displayedGameWords.length ) ) {  
        setChar(displayedGameWords[currentIndex].charAt(event.target.value.length));
        if (event.target.value.endsWith(' ')) {   
          if(displayedGameWords[currentIndex] !== userGameInput){ 
            setCheckGameWord(false);
            setWrongGameIndex(wrongIndex => [...wrongIndex, currentIndex]);
            
            
          }
          else{
          setGameCharCount(charCount => charCount+event.target.value.length - 1);
          setUserGameInput('');
          setCurrentIndex(prevIndex => prevIndex + 1);
          }

        }
    
    }
    if(event.target.value.endsWith(' ') && (currentIndex === displayedGameWords.length-1)){
      setWin(true);
      setGameResults(true);
    }


}

const handleGameReset = () =>{
    setStartGame(false);
    setIndex(0);
    setUserGameInput('');
    setCurrentIndex(0);
    setWordShuffle(!wordShuffle);
    gameInput.current.focus();
    setWin(false);
    setWrongGameIndex([]);
}
  return (
    <div class="flex items-center justify-center">
    <input ref={gameInput} value = {userGameInput} onChange={handleUserGameInput}  type="text"  class="flex h-full p-2.5 w-96  text-m text-gray-900 bg-gray-50 rounded-s-lg  border border-gray-300 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Start typing here" required />
    <button  onClick = {handleGameReset} class="h-full p-2.5 text-m font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Reset
    </button>
    </div>
  )
}

export default UserGameInput
