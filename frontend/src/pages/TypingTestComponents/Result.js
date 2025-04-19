import React, { useContext, useEffect,useState } from 'react'
import { GetValuesContext } from '../../context/GetValuesContext'



const Result = () => {
    const {setCurrentWordIndex,setWrongIndex, wrongIndex,
      setTotalCharCount,setCharCount, setStart,setTimeCount,
      setUserInput,setTimeLeft,selectedOption,lineCount,
       selectedTime,finishTime,accuracy,wpm,setShuffle,shuffle,setCorrectIndex,
       displayedWords,setResults} = useContext(GetValuesContext);
    const [buttonClicked, setButtonClicked] = useState(false);
    const wordHilight=(index)=>{
        if(wrongIndex.includes(index)) return "text-red-400"
        else return "text-blue-400"
    }

    const testAgain = () => {
      setButtonClicked(!buttonClicked);
    }

    useEffect(()=>{
      if(buttonClicked) {
        setResults(false);
        setStart(false);
        setTimeCount(0);
        setShuffle(!shuffle);
        setCurrentWordIndex(0);
        if(selectedOption === 'time') setTimeLeft(selectedTime);
        setTimeLeft(0);
        setUserInput('');
        setWrongIndex([]);
        setCorrectIndex([]);
        setTotalCharCount(0);
        setCharCount(0);
        lineCount.current = 0;
      }
    })

  

  return (
    <div class="flex items-center justify-center flex-col">
        <div class="flex items-center justify-center space-x-20 p-20 text-white">
            
            <div>
            {wpm}WPM
            </div>
            <div>
             {finishTime}s
            </div>
            <div>
            {accuracy}%
            </div>  
        </div>
        <div class="flex flex-col items-center justify-center p-10">
          
          {wrongIndex.length > 0 && (
            <span class="text-white">
            Incorrect words:
          </span>
          )}
          
        <blockquote class="text-[20px] text-white dark:text-white  overflow-y-auto" >
        {wrongIndex.map(index => displayedWords[index]).map((word, index) => (
              <>
               <span 
               style={{letterSpacing: '3px'}}
               className={`inline-block px-[3px] rounded ${wordHilight(index)} tracking-wider`}
               key={index}>{word}</span>
                <span>{' '}</span>
              </>
              ))}
        </blockquote>
        </div>
        <div class="inline-block  rounded text-white p-2 bg-blue-700">
            <button onClick={testAgain}>Test again</button>
        </div>

    </div>

  )
}

export default Result
