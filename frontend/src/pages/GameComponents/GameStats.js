import React from 'react'
import {  useContext } from 'react';
import {GetValuesContext}  from '../../context/GetValuesContext';



const GameStats = () => {
  const {selectedSpeed, selectedGameWords} = useContext(GetValuesContext);


  return (
   

<div class="flex rounded-md shadow-sm">
 <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  rounded-s-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {selectedSpeed}{' '}wpm
  </div>
  <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
    {selectedGameWords}{' '}words
  </div>
  <div class="px-4 py-2 text-m font-medium text-gray-900 bg-white border-t border-b  rounded-e-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
  
    
  </div>
 
</div>

  )
}

export default GameStats
