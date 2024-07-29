import React, { useContext, useEffect } from 'react';
import { GetValuesContext } from '../../context/GetValuesContext';


const DisplayWords = () => {
  const {
    selectedTime, shuffle, 
    selectedOption, displayedWords, scrollRef, 
    setDisplayedWords, selectedWords, selectedText, 
    wordRef, currentWordIndex, userInput, character, 
    wrongIndex, checkWord,
  } = useContext(GetValuesContext);



  useEffect(() => {
    const setRandomWordCount = () => {
      if (selectedOption === 'time') return selectedTime * 5;
      if (selectedOption === 'words') return selectedWords;
    }

    if (selectedText) {
      const wordsArray = selectedText.trim().split(' ');
      const initialWords = getRandomWords(wordsArray, setRandomWordCount());
      setDisplayedWords(initialWords);
    }
  }, [setDisplayedWords, selectedText, shuffle, selectedWords, selectedTime, selectedOption]);

  const getRandomWords = (arrayWords, count) => {
    let randomText = '';
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arrayWords.length);
      randomText += arrayWords[randomIndex] + ' ';
    }
    return randomText.trim().split(' ');
  };


 


  const highlight = (wordIndex) => {
    if (wordIndex === currentWordIndex) {
      if (userInput) {
        if (userInput[userInput.length - 1] === character) return "bg-blue-900   ";
      }
      return "bg-blue-900 ";
    }
    if (wordIndex < currentWordIndex) {
      for (let i = 0; i < wrongIndex.length; i++) {
        if (wordIndex === wrongIndex[i]) return 'text-red-400  ';
      }
    }
    if (checkWord === 'false') return "text-red-700 ";
  }

  return (
    <div >
      <blockquote ref={scrollRef} class=" text-lg text-white dark:text-white  " style={{ height: '118px', marginTop: '50px', maxWidth: '1000px', wordWrap: 'break-word', whiteSpace: 'normal', overflow: 'hidden', scrollBehavior: 'smooth' }}>
      {displayedWords.map((word, index) => (
          <>
              <span
                ref={wordRef.current[index]}
                style={{ letterSpacing: '2px' }}
                className={`px-[3px] rounded ${highlight(index)} `}
                key={index}>
                  {
                    word.trim().split("").map((char) => { 
                      
                      return(
                          <span 
                          
                            style={{marginRight: '2px', width: '2px'}}
                            class="inline-bock "
                            >{char}</span>
                          )})}
              {' '}
              </span>

          </>
        ))}
      </blockquote>
    </div>
  )
}

export default DisplayWords
