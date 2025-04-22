import React, { useState, useEffect, useContext } from 'react';
import { GetValuesContext } from '../../context/GetValuesContext';
import axios from 'axios';

const CustomInput = ({ selectedCustom, setSelectedCustom }) => {
  const [textAreaValue, setTextAreaValue] = useState('Quick brown fox jumps over a lazy dog');
  const [customTextName, setCustomTextName] = useState('');
  const [existingTexts, setExistingTexts] = useState([]);  // State for storing existing text names
  const [isViewingTexts, setIsViewingTexts] = useState(false); // To toggle the display of existing texts
  const { setDisplayedWords, selectedOption } = useContext(GetValuesContext); // Assume userEmail is provided

  const toggleMenu = () => {
    setSelectedCustom(!selectedCustom);
  };

  const handleCustomInput = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleTextNameChange = (event) => {
    setCustomTextName(event.target.value);
  };

  const handleSave = async () => {
    if (!customTextName || !textAreaValue) {
      alert('Please provide a name and some text to save.');
      return;
    }

    const email = localStorage.getItem('email');

    try {
      // Check if the text name already exists
      const isDuplicate = existingTexts.some(text => text.textName === customTextName);

      if (isDuplicate) {
        alert('A text with this name already exists. Please choose a different name.');
        return;
      }

      // Save the new text
      await axios.post('http://localhost:5000/api/text/save', {
        email,
        textName: customTextName,
        textData: textAreaValue,
      });

      alert('Text saved successfully!');
      toggleMenu();
    } catch (error) {
      console.error('Error saving text:', error);
      alert('Failed to save text.');
    }
  };

  const fetchTexts = async () => {
    const email = localStorage.getItem('email');
    
    try {
      const response = await axios.get(`http://localhost:5000/api/text/user-texts/${email}`);

      setExistingTexts(response.data);  // Store the response data (list of texts)
      setIsViewingTexts(true);  // Show the existing texts
    } catch (error) {
      console.error('Error fetching existing texts:', error);
      alert('Failed to fetch existing texts.');
    }
  };

  useEffect(() => {
    if (selectedOption === 'custom') {
      const wordsArray = textAreaValue.trim().split(' ');
      setDisplayedWords(wordsArray);
    }
  }, [textAreaValue, setDisplayedWords, selectedOption]);

  return (
    <div>
      {selectedCustom && (
        <div style={{ width: '600px', padding: '20px' }}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-1 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <input
                type="text"
                placeholder="Enter a name for your text"
                value={customTextName}
                onChange={handleTextNameChange}
                className="w-full mb-2 px-2 py-1 rounded text-sm focus:outline-none dark:bg-gray-600 dark:text-white"
              />
              <textarea
                value={textAreaValue}
                onChange={handleCustomInput}
                rows="15"
                className="w-full focus:outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                onClick={handleSave}
                type="button"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
              >
                Save Text
              </button>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900"
              >
                Cancel
              </button>
            </div>
          </div>

          {/* Button to view existing texts */}
          <button
            onClick={fetchTexts}
            type="button"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
          >
            View Saved Texts
          </button>

          {/* Display existing text names */}
          {isViewingTexts && existingTexts.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-medium">Saved Texts:</h3>
              <ul className="list-disc pl-5">
                {existingTexts.map((text, index) => (
                  <li key={index}>{text.textName}</li>  
                ))}
              </ul>
            </div>
          )}

          {/* If no texts are available */}
          {isViewingTexts && existingTexts.length === 0 && (
            <div className="mt-4 text-gray-600">No saved texts found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
