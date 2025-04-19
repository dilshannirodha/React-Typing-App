import React, { useContext} from 'react';
import SetValues from './SetValues';
import { GetValuesContext } from '../../context/GetValuesContext';


const TypingSettings = () => {
  const {selectedOption, setSelectedOption} = useContext(GetValuesContext);
  

  const handleCustom = () => {
    setSelectedOption('custom');
   
  }
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    
    <div>
  <div className="flex  md:flex-row xl:flex-row sm:flex-col items-center justify-center ">

<div className="inline-flex   rounded-md shadow-sm">
  
  <div
    onClick={() => handleSelect('time')}
    className={`px-5 py-2 text-m font-medium flex items-center justify-center ${
      selectedOption === 'time' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border-t rounded-s-lg border-b border-r border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Time
  </div>
  <div
    onClick={() => handleSelect('words')}
    className={`px-5 py-2 text-m font-medium flex items-center justify-center ${
      selectedOption === 'words' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Words
  </div>
  <div
    onClick={() => handleCustom()}
    className={`px-5 py-2 text-m font-medium  flex items-center justify-center ${
      selectedOption === 'custom' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
    } border border-gray-200 rounded-e-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
  >
    Custom
  </div>
</div>

<div>
    <SetValues selectedOption={selectedOption}/>
</div>

  
    </div>
    </div>

    
  );
};

export default TypingSettings;
