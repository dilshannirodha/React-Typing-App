import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GetValuesContext } from "../../context/GetValuesContext";
import ViewTexts from "../TypingTestComponents/ViewTexts"; // ✅ Import your separate ViewTexts component

const CustomText = ({ selectedCustom, setSelectedCustom }) => {
  const [textAreaValue, setTextAreaValue] = useState(
    "Quick brown fox jumps over a lazy dog"
  );
  const [customTextName, setCustomTextName] = useState("");
  const { setDisplayedGameWords, selectedOption ,displayedGameWords, showTexts, setShowTexts} = useContext(GetValuesContext);

  const toggleMenu = () => {
    setSelectedCustom(!selectedCustom);
  };

  const handleCustomInput = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleTextNameChange = (event) => {
    setCustomTextName(event.target.value);
  };

  useEffect(() => {
    if (selectedOption === "custom") {
      const wordsArray = textAreaValue.trim().split(" ");
      setDisplayedGameWords(wordsArray);
      
    }
  }, [textAreaValue, setDisplayedGameWords, selectedOption]);

  const handleSave = async () => {
    if (!customTextName || !textAreaValue) {
      alert("Please provide a name and some text to save.");
      return;
    }

    const email = localStorage.getItem("email");

    try {
      // ✅ Check for duplicate text name using your backend
      const response = await axios.get(
        `http://localhost:5000/api/text/user-texts/${email}`
      );
      const existingTexts = response.data;
      const isDuplicate = existingTexts.some(
        (text) => text.textName === customTextName
      );

      if (isDuplicate) {
        alert(
          "A text with this name already exists. Please choose a different name."
        );
        return;
      }

      // ✅ Save the new text
      await axios.post("http://localhost:5000/api/text/save", {
        email,
        textName: customTextName,
        textData: textAreaValue,
      });

      alert("Text saved successfully!");
      toggleMenu();
    } catch (error) {
      console.error("Error saving text:", error);
      alert("Failed to save text.");
    }
  };

  const handleToggleTexts = () => {
    setShowTexts(!showTexts); 

  };

  return (
    <div>
      {selectedCustom && (
        <div style={{ width: "600px", padding: "20px" }}>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-1 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              {showTexts ? (
                <>
                <div className="mt-4">
                  <ViewTexts />
                </div>
                <button
                onClick={handleToggleTexts}
                className="py-2.5 px-4 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                {showTexts ? "cancel" : "View Texts"}
              </button>
                </>
                
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Enter a name for your text"
                    value={customTextName}
                    onChange={handleTextNameChange}
                    className="w-full mb-2 px-2 py-1 rounded text-sm focus:outline-none dark:bg-gray-600 dark:text-white"
                  />
                  <textarea
                    value={displayedGameWords}
                    onChange={handleCustomInput}
                    rows="15"
                    className="w-full focus:outline-none px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    required
                  ></textarea>
                   <div className="flex gap-2 items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                onClick={handleSave}
                className="py-2.5 px-4 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900"
              >
                Save Text
              </button>

              <button
                onClick={handleToggleTexts}
                className="py-2.5 px-4 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
              >
                {showTexts ? "Hide Texts" : "View Texts"}
              </button>
              <button
                onClick={toggleMenu}
                className="py-2.5 px-4 text-xs font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900"
              >
                Ok
              </button>

              
              
            </div>
                </>
              )}
            </div>

            {/* ✅ Save / Cancel / View Texts Buttons on same row */}
           
          </div>

        </div>
      )}
    </div>
  );
};

export default CustomText;
