import React, {useState ,  useEffect, useContext} from 'react'
import CustomInput from './CustomInput';
import {GetValuesContext} from '../../context/GetValuesContext';
import English200 from '../../assets/200words.txt'
import English1000 from '../../assets/1000words.txt'
import English5000 from '../../assets/5000words.txt'

const SetValues = () => {
    const {selectedTime, setSelectedTime,
            selectedWords, setSelectedWords, setSelectedText,
            selectedFile, setSelectedFile,
            selectedOption,
            setTimeLeft } = useContext(GetValuesContext);

    const [selectedCustom, setSelectedCustom ] = useState(false);
    
    
  const handleSelect = (option) => {
    if(selectedOption === 'time'){
        setSelectedTime(option);
    }
    else if(selectedOption === 'words'){
        setSelectedWords(option);
    }
        
    else if(selectedOption === 'custom'){
        setSelectedCustom(option);
    }
        
  };

  const handleSelectInputTime = (event) => {
        setSelectedTime(event.target.value);
        setTimeLeft(selectedTime);
  }
  const handleSelectInputWords = (event) => {
        setSelectedWords(event.target.value);
  }

  const handleText = (event) => {
    const option = event.target.value;

    switch (option) {
      case 'English200':
        setSelectedFile(English200);
        break;
      case 'English1000':
        setSelectedFile(English1000);
        break;
      case 'English5000':
        setSelectedFile(English5000);
        break;
      default:
        setSelectedFile(English200);
        break;
    }
  }

  useEffect(()=>{
    if (selectedFile) {
        fetch(selectedFile)
          .then(response => response.text())
          .then(data => setSelectedText(data))
          .catch(error => console.error('Error fetching file:', error));
      } 
  },[selectedFile, setSelectedText])

  


  return (
    
    <div class="flex items-center justify-center ">

    <div className="flex items-center justify-center">
        {selectedOption !== 'custom' && (
            <div class="text-m font-medium text-gray-900 bg-white  border-b  rounded-s-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <select value={selectedFile} onChange={handleText} id="text" class="px-5 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-m focus:outline-none font-medium rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option >Select Text</option>
                <option value="English200">English 200</option>
                <option value="English1000">English 1000</option>
                <option value="English5000">English 5000</option>
            </select>
            </div>
        )}

               
        
  {selectedOption === 'time' && (
    <div className="flex items-center justify-center">
    
        <div
            onClick={() => handleSelect(60)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedTime === 60 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-r border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
         1 min
        </div>
         <div
            onClick={() => handleSelect(120)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedTime === 120 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            2min
        </div>
        <div
            onClick={() => handleSelect(180)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedTime === 180 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border border-b border-gray-300 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            3 min
        </div>
        <div
            onClick={() => handleSelect(300)}
            className={`px-5 py-2 text-m font-medium  flex items-center justify-center whitespace-nowrap ${
            selectedTime === 300 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border border-gray-200  hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            5 min
        </div>
        <div
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedOption === 'time' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b rounded-e-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
           <input value={selectedTime} onChange={handleSelectInputTime} id="time-input" className=" block w-20 focus:outline-none "placeholder="Time" required />

        </div>
     </div>
  )}

{selectedOption === 'words' && (
    <div className="flex items-center justify-center">
    
        <div
            onClick={() => handleSelect(10)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedWords === 10 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-r border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
         10
        </div>
         <div
            onClick={() => handleSelect(50)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedWords === 50 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            50
        </div>
        <div
            onClick={() => handleSelect(100)}
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedWords === 100 ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
            100
        </div>
        <div
            className={`px-5 py-2 text-m font-medium flex items-center justify-center whitespace-nowrap ${
            selectedOption === 'words' ? 'text-blue-700 bg-gray-100' : 'text-gray-900 bg-white'
            } border-t border-b rounded-e-lg border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
           <input value={selectedWords} onChange={handleSelectInputWords} type="number" id="words-input" className=" block w-20 focus:outline-none " placeholder="Words" required />
        </div>
     </div>
  )}

  {selectedOption === 'custom' && (
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
    { selectedOption === 'custom' && (
      
      <CustomInput setSelectedCustom={setSelectedCustom} selectedCustom={selectedCustom}/>
    )}

    </div>
</div>

  )
}

export default SetValues
