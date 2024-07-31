import  {  useContext, useEffect} from 'react';
import {GetValuesContext}  from '../../context/GetValuesContext';

const UserInput = () => {


  const {userInput, setUserInput,
        start, setStart,
        displayedWords, 
         setCharacter,
        scrollRef,inputRef,
        setTotalCharCount ,
        currentWordIndex, setCurrentWordIndex,
        setCheckWord,
        setWrongIndex,finishTime,lineCount,
         setCorrectIndex,setwpm,setShuffle,shuffle,
        setCharCount, totalCharCount,setAccuracy,timeLeft,
        setResults,selectedOption,setFinishTime,
       setTimeLeft,selectedTime , charCount,setTimeCount 
       } = useContext(GetValuesContext);

       useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
      })
    

    const handleReset = () =>{
      setStart(false);
      setShuffle(!shuffle);
      setCurrentWordIndex(0);
      if(selectedOption === 'time') setTimeLeft(selectedTime);
      setTimeLeft(0);
      setUserInput('');
      setWrongIndex([]);
      setCorrectIndex([]);
      setTotalCharCount(0);
      setCharCount(0);
      setTimeCount(0);
      scrollRef.current.scrollTop = 0;
      inputRef.current.focus();
      lineCount.current = 0;
    }

    


    const handleUserInput = (event) => {
        if(!start) setStart(true);
        setUserInput(event.target.value);

          if((currentWordIndex !== displayedWords.length) ) { 
              setResults(false);
              setCharacter(displayedWords[currentWordIndex].charAt(event.target.value.length));
  
              if (event.target.value.endsWith(' ')) {
                  
                  if(currentWordIndex > 0 && currentWordIndex % 20 === 0){
                    scrollRef.current.scrollTop += 34;
                 
                }
    
                setTotalCharCount(totalCharCount => totalCharCount + event.target.value.length -1);
                if(displayedWords[currentWordIndex] !== userInput){ 
                  setCheckWord(false);
                  setWrongIndex(wrongIndex => [...wrongIndex, currentWordIndex]);
                  setCurrentWordIndex(prevIndex => prevIndex + 1);
                  setUserInput('');
                }
                else{
                setCorrectIndex(correctIndex => [...correctIndex, currentWordIndex]);
                setCharCount(charCount => charCount+event.target.value.length - 1);
                setUserInput('');
                setCurrentWordIndex(prevIndex => prevIndex + 1);
                }
  
              }
          
          }
         if(event.target.value.endsWith(' ') && (currentWordIndex === displayedWords.length-1)  ){
            
            if(selectedOption==='time') setFinishTime(selectedTime);
            setFinishTime(timeLeft/1000);
            setwpm(Math.round((charCount/((finishTime-0.5)*4))*60));
            setAccuracy(Math.round((charCount/totalCharCount)*100));
            setResults(true);
           
          } 

          
  
      }

  return (
    <div class="flex items-center justify-center">
            <input ref={inputRef} value = {userInput} onChange={handleUserInput}  type="text"  class="flex h-full p-2.5 w-96  text-m text-gray-900 bg-gray-50 rounded-s-lg  border border-gray-300 focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Start typing here" required />
            <button onClick={handleReset}  class="h-full p-2.5 text-m font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Reset
            </button>
     </div>
  )
}

export default UserInput
