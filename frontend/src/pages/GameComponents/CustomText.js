import React, { useState, useEffect , useContext } from 'react';
import {GetValuesContext} from '../../context/GetValuesContext';

const CustomText = ({selectedCustom, setSelectedCustom}) => {
  const [textAreaValue, setTextAreaValue] = useState('Quick brown fox jump over a lazy dog');
  const { setDisplayedGameWords,wordShuffle, selectedOption} = useContext(GetValuesContext);


  const toggleMenu = () => {
    setSelectedCustom(!selectedCustom);
  }
  const handleCustomInput = (event) => {
    setTextAreaValue(event.target.value);

  }

  useEffect(()=>{
    if(selectedCustom){
          const wordsArray = textAreaValue.trim().split(' ');
          setDisplayedGameWords(wordsArray);
    }

  },[textAreaValue, setDisplayedGameWords,wordShuffle, selectedOption, selectedCustom])

  const handleSubmit = () =>{
    toggleMenu();
  }
  

  return (
  <div class="">
      { selectedCustom && (
        <div
          style={{ width: '600px', padding: '20px' }}
          
           >
            <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-1 py-2 bg-white rounded-t-lg dark:bg-gray-800">
               <textarea value={textAreaValue} onChange={handleCustomInput} rows="15"  class="w-full focus:outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" required ></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button onClick={handleSubmit} type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                 Enter text
                </button>
                <button onClick={toggleMenu} type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                 Cancel
                </button>
              </div>
            </div>
  
        </div>
      )}
  </div>
  );
};

export default CustomText;

