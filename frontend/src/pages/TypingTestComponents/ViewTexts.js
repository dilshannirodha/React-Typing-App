import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTexts = () => {
  const [texts, setTexts] = useState([]); // State to store the texts
  const [loading, setLoading] = useState(true); // Loading state to show loading spinner

  // Function to fetch texts from the backend
  const fetchTexts = async () => {
    try {
      const email = localStorage.getItem('email');
      const response = await axios.get(`http://localhost:5000/api/text/user-texts/${email}`);

      setTexts(response.data); // Set the fetched texts into state
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching texts:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  // Fetch texts when the component mounts
  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Saved Texts</h2>

      {loading ? (
        <div className="text-gray-600">Loading...</div> // Show loading message
      ) : (
        <div className="mt-4">
          <h3 className="text-lg font-medium">Saved Texts:</h3>
          {texts.length > 0 ? (
            <button>
 
              {texts.map((text, index) => (
                <span key={index}>{text.textName}</span>  
              ))}
            

            </button>
           
          ) : (
            <div className="text-gray-600">No saved texts found.</div> 
          )}
        </div>
      )}
    </div>
  );
};

export default ViewTexts;
