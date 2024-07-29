import React, { useContext} from 'react';
import GameValues from './GameValues';
import { GetValuesContext } from '../../context/GetValuesContext';


const TypingGameSettings = () => {
  const {selectedGameOption, setSelectedGameOption,
        
         } = useContext(GetValuesContext);
  

  const handleCustom = () => {
    setSelectedGameOption('custom');
   
  }
  const handleSelect = (option) => {
    setSelectedGameOption(option);
  };

  return (
    
    <div>
  <div className="flex  md:flex-row xl:flex-row sm:flex-col items-center justify-center ">

<div className="inline-flex   rounded-md shadow-sm">
  
  <div
    onClick={() => handleSelect('speed')}
    className={`px-5 py-2 text-m font-medium flex items-center justify-center ${
      selectedGameOption === 'speed' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border-t rounded-s-lg border-b border-r border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Speed
  </div>
  <div
    onClick={() => handleSelect('words')}
    className={`px-5 py-2 text-m font-medium flex items-center justify-center ${
      selectedGameOption === 'words' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Text
  </div>
  <div
    onClick={() => handleCustom()}
    className={`px-5 py-2 text-m font-medium  flex items-center justify-center ${
      selectedGameOption === 'custom' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Custom Text
  </div>
</div>

<div>
    <GameValues />
</div>

  
    </div>
    </div>

    
  );
};

export default TypingGameSettings;
