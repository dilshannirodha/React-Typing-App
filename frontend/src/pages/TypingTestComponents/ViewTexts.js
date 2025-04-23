import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GetValuesContext } from '../../context/GetValuesContext';

const ViewTexts = () => {
  const [texts, setTexts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setDisplayedWords, setShowTexts, setDisplayedGameWords } = useContext(GetValuesContext); // ✅ useContext here

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const email = localStorage.getItem('email');
        const response = await axios.get(`http://localhost:5000/api/text/user-texts/${email}`);
        setTexts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching texts:', error);
        setLoading(false);
      }
    };

    fetchTexts();
  }, []);

  const handleTextClick = (textData) => {
    const wordsArray = textData.trim().split(' ');
    setDisplayedWords(wordsArray);
    setDisplayedGameWords(wordsArray);
    setShowTexts(false); 
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Saved Texts</h2>

      {loading ? (
        <div className="text-gray-600">Loading...</div>
      ) : (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Saved Texts:</h3>
          <div className="flex flex-wrap gap-2">
            {texts.length > 0 ? (
              texts.map((text, index) => (
                <button
                  key={index}
                  onClick={() => handleTextClick(text.textData)}
                  className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
                >
                  {text.textName}
                  
                </button>
              ))
            ) : (
              <div className="text-gray-600">No saved texts found.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewTexts;
