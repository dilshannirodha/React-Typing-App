import React, { useEffect } from 'react'
import {  useContext } from 'react';
import {GetValuesContext}  from '../../context/GetValuesContext';



const Stats = () => {
  const {setStart,selectedOption, currentWordIndex, 
    selectedWords, timeLeft , charCount, totalCharCount, 
    selectedTime, setTimeLeft
  } = useContext(GetValuesContext);
  
  
  useEffect(() => {
    if(selectedOption === 'time') {
      setStart(false);
      setTimeLeft(0);

    }
    if(selectedOption === 'words'){
      setStart(false);
      setTimeLeft(0);
      
    }
  },[selectedOption,selectedTime,setStart, setTimeLeft])

  

 

  const wpmCalculate = (t) =>{
    if(charCount === 0) return 0;
    else return Math.round((charCount/((t/1000-0.5)*4))*60);

  }

  const accuracyCalculate = () => {
    if(totalCharCount === 0 ) return 0;
    return Math.round((charCount/totalCharCount)*100);
  }


  const displayTime = (t) => {
    if (t < 60) return `${t}`;
    else if (t < 3600) {
      const minutes = Math.floor(t / 60);
      const seconds = t % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } 
    else {
      const hours = Math.floor(t / 3600);
      const minutes = Math.floor((t % 3600) / 60);
      const seconds = t % 60;
      return `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  };

  return (
   

<div class="flex rounded-md shadow-sm">
 <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  rounded-s-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {wpmCalculate(timeLeft)}
  </div>
  <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {accuracyCalculate()}%
  </div>
  {selectedOption === 'words' && (
    <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {currentWordIndex+1}{'/'}{selectedWords}
  </div>
  )}
  <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  rounded-e-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {selectedOption === 'time' && (
      <>
      {displayTime(Math.round(selectedTime-timeLeft/1000))}
      </>
    )}
    {selectedOption === 'words' && (
      <>
      {displayTime(Math.round(timeLeft/1000))}
      </>
    )}
     {selectedOption === 'custom' && (
      <>
      {displayTime(Math.round(timeLeft/1000))}
      </>
    )}
    
  </div>
 
</div>

  )
}

export default Stats
