import { useContext, useEffect } from 'react';
import { GetValuesContext } from '../../context/GetValuesContext';



const DisplayGameWords = () => {
  const {
    selectedGameText, selectedGameWords,setDisplayedGameWords,
    displayedGameWords, index,userGameInput, currentIndex,wordShuffle, char,wrongGameIndex,checkGameWord
    
  } = useContext(GetValuesContext);


  useEffect(() => {

    if (selectedGameText) {
      const wordsArray = selectedGameText.trim().split(' ');
      const initialWords = getRandomWords(wordsArray, selectedGameWords);
      setDisplayedGameWords(initialWords);
    }
  }, [setDisplayedGameWords, selectedGameText, wordShuffle, selectedGameWords]);

  const getRandomWords = (arrayWords, count) => {
    let randomText = '';
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * arrayWords.length);
      randomText += arrayWords[randomIndex] + ' ';
    }
    return randomText.trim().split(' ');
  };


  const highlight = (wordIndex) => {
    
    if (wordIndex === currentIndex) {
      if (userGameInput) {
        if (userGameInput[userGameInput.length - 1] === char) return "bg-blue-900   ";
      }
      return "bg-blue-900 ";
    }
    
    if (wordIndex < currentIndex) {
      for (let i = 0; i < wrongGameIndex.length; i++) {
        if (wordIndex === wrongGameIndex[i]) return 'text-red-400  ';
      }
    }
    if (checkGameWord === 'false') return "text-red-700 ";
  }

  const highlightChar=(charIndex)=>{
    if(index === charIndex) return "bg-green-700";
  }

let charIndex = 0;
  return (
    <div >
      <blockquote class=" text-lg text-white dark:text-white  " style={{ height: '118px', marginTop: '50px', maxWidth: '1000px', wordWrap: 'break-word', whiteSpace: 'normal', overflow: 'hidden', scrollBehavior: 'smooth' }}>
        {displayedGameWords.map((word, index) => (
          <>
              <span
                style={{ letterSpacing: '2px' }}
                className={`px-[3px] rounded ${highlight(index)} `}
                key={index}>
                  {
                    word.trim().split("").map((char) => { 
                      const charIndexKey = charIndex++;
                      return(
                          <span 
                            key={charIndexKey}
                            style={{marginRight: '2px'}}
                            class={`${highlightChar(charIndexKey)}`}
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

export default DisplayGameWords
