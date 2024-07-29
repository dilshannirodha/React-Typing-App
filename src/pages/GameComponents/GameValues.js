import React, {useState ,  useEffect, useContext} from 'react'
import CustomText from './CustomText';
import {GetValuesContext} from '../../context/GetValuesContext';
import English200 from '../../assets/200words.txt'
import English1000 from '../../assets/1000words.txt'
import English5000 from '../../assets/5000words.txt'

const GameValues = () => {
    const {selectedSpeed, setSelectedSpeed,
            selectedGameWords, setSelectedGameWords, setSelectedGameText,
            selectedTextFile, setSelectedTextFile,
            selectedGameOption,
             } = useContext(GetValuesContext);

    const [selectedCustom, setSelectedCustom ] = useState(false);
    
    
    const handleSelect = (option) => {
      if (selectedGameOption === 'speed') {
          setSelectedSpeed(option);
      } else if (selectedGameOption === 'words') {
          setSelectedGameWords(option);
      } else if (selectedGameOption === 'custom') {
          setSelectedCustom(option);
      }
  };

  const handleSelectInputSpeed = (event) => {
        setSelectedSpeed(event.target.value);
        
  }
  const handleSelectInputWords = (event) => {
        setSelectedGameWords(event.target.value);
  }

  const handleText = (event) => {
    const option = event.target.value;

    switch (option) {
      case 'English200':
        setSelectedTextFile(English200);
        break;
      case 'English1000':
        setSelectedTextFile(English1000);
        break;
      case 'English5000':
        setSelectedTextFile(English5000);
        break;
      default:
        setSelectedTextFile(English200);
        break;
    }
  }

  useEffect(()=>{
    if (selectedTextFile) {
        fetch(selectedTextFile)
          .then(response => response.text())
          .then(data => setSelectedGameText(data))
          .catch(error => console.error('Error fetching file:', error));
      } 
  },[selectedTextFile, setSelectedGameText])

  


  return (
    
    <div class="flex items-center justify-center ">

    <div className="flex items-center justify-center">
      {selectedGameOption !== 'custom' && (
 <div class="text-m font-medium text-gray-900 bg-white  border-b  rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
 <select value={selectedTextFile} onChange={handleText} id="text" class="px-5 py-2 bg-gray-50 rounded-lg border border-gray-300 text-gray-900 text-m focus:outline-none font-medium rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
     <option >Select the Text</option>
     <option value="English200">English 200</option>
     <option value="English1000">English 1000</option>
     <option value="English5000">English 5000</option>
 </select>
 </div>
      )}
   
               
        
  {selectedGameOption === 'speed' && (
    <div className="flex items-center justify-center">
    
        <div
            onClick={() => handleSelect(30)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedSpeed === 30 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-r rounded-s-lg border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
         30
        </div>
         <div
            onClick={() => handleSelect(60)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedSpeed === 60 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
        60
        </div>
        <div
            onClick={() => handleSelect(90)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedSpeed === 90 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border border-b border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            90
        </div>
        <div
            onClick={() => handleSelect(120)}
            className={`px-5 py-2 text-m font-medium  flex items-center justify-center whitespace-nowrap ${
            selectedSpeed === 120 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border border-gray-200  hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
         120
        </div>
        <div
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedGameOption === 'speed' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b rounded-e-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
           <input value={selectedSpeed} onChange={handleSelectInputSpeed}  className=" block w-20 focus:outline-none "placeholder="Time" required />

        </div>
     </div>
  )}

{selectedGameOption === 'words' && (
    <div className="flex items-center justify-center">
        <div
            onClick={() => handleSelect(10)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedGameWords === 10 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-r rounded-s-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
         10
        </div>
         <div
            onClick={() => handleSelect(50)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedGameWords === 50 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            50
        </div>
        <div
            onClick={() => handleSelect(100)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedGameWords === 100 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            100
        </div>
        <div
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedGameOption === 'words' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b rounded-e-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
           <input value={selectedGameWords} onChange={handleSelectInputWords} type="number" id="words-input" className=" block w-20 focus:outline-none " placeholder="Words" required />
        </div>
     </div>
  )}

  {selectedGameOption === 'custom' && (
    <div className="flex items-center justify-center">
    <div
        onClick={() => handleSelect(true)}
        className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
        selectedCustom  ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
        } border-t border-b rounded-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
    >
    set Custom text
   </div>
   </div>
  )}
        
    </div>
    
    <div class='absolute ' style={{marginTop: '450px'}}>
    { selectedGameOption === 'custom' && (
      
      <CustomText setSelectedCustom={setSelectedCustom} selectedCustom={selectedCustom}/>
    )}

    </div>
</div>

  )
}

export default GameValues
