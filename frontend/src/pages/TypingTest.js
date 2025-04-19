import {useContext,useEffect } from 'react';
import React from 'react';
import TypingSettings from './TypingTestComponents/TypingSettings';
import CustomInput from './TypingTestComponents/CustomInput';
import Stats from './TypingTestComponents/Stats';
import {GetValuesContext}  from '../context/GetValuesContext';
import DisplayWords from './TypingTestComponents/DisplayWords';
import UserInput from './TypingTestComponents/UserInput';
import Result from './TypingTestComponents/Result';


const TypingTest = () => {
  const {
          selectedTime, 
          start,
          totalCharCount, charCount, 
          results,setwpm,
          setAccuracy,setResults,setFinishTime,
          timeCount,intervalRef,setTimeCount,setTimeLeft
        
        } = useContext(GetValuesContext);

        
        useEffect(() => {
          if(start){
              const startTime = Date.now();
              intervalRef.current = setInterval(() => {
            setTimeLeft(Date.now() - startTime); 
            setTimeCount(pre => pre + 1 );
          }, 1000);
              return () => {
                clearInterval(intervalRef.current);
              }; 
      
          }
          else if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
      
          return () => clearInterval(intervalRef.current);
          
        }, [start,intervalRef,setTimeLeft,results,setTimeCount]);


        useEffect(() => {
          if( timeCount !== 0 ){
            if(timeCount === parseInt(selectedTime)){
              setFinishTime(selectedTime);
              setwpm(Math.round((charCount/((parseInt(timeCount)-0.5)*4))*60));
                setAccuracy(Math.round((charCount/totalCharCount)*100));
                setResults(true);
            }
          }
        },[ selectedTime,totalCharCount,charCount,timeCount,setAccuracy,setResults,setFinishTime,setwpm])



  return (
    <>
    { !results && (
  <div class=" flex items-center justify-center bg-gray-900 flex flex-col space-y-20 mt-10 ">
 

  <div>
     <div class=" flex md:flex-row sm:flex-col lg:xl:flex-row items-center justify-center">
      <Stats />
      {!start && (
          <>
          <TypingSettings />
          <CustomInput />
     </>
        )}
        
       </div>
  </div>

  

<DisplayWords />
<UserInput />


</div>

)}


{results && (
  <div> 
  <Result />
</div>
)
}


  </>  
  )
}

export default TypingTest;