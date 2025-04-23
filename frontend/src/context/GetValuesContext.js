import React from 'react'
import { createContext , useState , useRef} from 'react'
import English200 from '../assets/200words.txt'


const GetValuesContext = createContext();

const GetValuesProvider = ({ children }) => {
    const [selectedTime, setSelectedTime] = useState(60);
    const [selectedWords, setSelectedWords] = useState(50);
    const [selectedText, setSelectedText ] = useState('');
    const [selectedFile, setSelectedFile] = useState(English200);
    const [displayedWords, setDisplayedWords] = useState([]);
    const [start, setStart] = useState(false);
    const [userInput, setUserInput] = useState();
    const [selectedCustomText, setSelectedCustomText] = useState("The Quick brown fox jump over a lazy dog");
    const [reset, setReset]= useState(false);
    const [character, setCharacter] = useState();
    const [nextPosition, setNextPosition] = useState(0);
    const [position, setPosition]= useState(0);
    const scrollRef = useRef(null);
    const [totalCharCount, setTotalCharCount ] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [checkWord,setCheckWord] = useState(false);
    const [wrongIndex, setWrongIndex] = useState([]);
    const [correctIndex, setCorrectIndex] = useState([]);
    const intervalRef = useRef(null);
    const wordRef= useRef([]); 
    const inputRef = useRef(null);
    const lineCount = useRef(0);
    const [timeLeft, setTimeLeft] = useState();
    const [wordTimeLeft, setWordTimeLeft] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const [selectedOption, setSelectedOption] = useState('time');
    const [results, setResults] = useState(false);
    const [finishTime,setFinishTime]= useState();
    const [wpm,setwpm]= useState();
    const [accuracy,setAccuracy]= useState();
    const [shuffle, setShuffle] = useState(true);
    const [containerWidth, setContainerWidth] = useState();
    const [timeCount, setTimeCount] = useState(0);

    const [selectedSpeed, setSelectedSpeed] = useState(30);
    const [selectedGameOption, setSelectedGameOption ] = useState('speed');
    const [selectedGameWords, setSelectedGameWords] = useState(50);
    const [selectedGameText, setSelectedGameText ] = useState()
    const [selectedTextFile, setSelectedTextFile ] = useState(English200);
    const [index, setIndex] = useState(0);
    const [startGame, setStartGame] = useState(false);
    const [displayedGameWords, setDisplayedGameWords] = useState([]);
    const [userGameInput, setUserGameInput] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wordShuffle, setWordShuffle] = useState(false);
    const [char, setChar] = useState();
    const [wrongGameIndex, setWrongGameIndex] = useState([]);
    const [checkGameWord, setCheckGameWord] = useState(false);
    const [gameCharCount,setGameCharCount] = useState(0);
    const gameInput = useRef(null);
    const [gameResults, setGameResults] = useState(false);
    const [win, setWin] = useState(false);
    const [showTexts, setShowTexts] = useState(false); 

    const values = {
        containerWidth, setContainerWidth,
         selectedTime, setSelectedTime,
         selectedWords, setSelectedWords,
         selectedText, setSelectedText,
         selectedFile, setSelectedFile,
         displayedWords, setDisplayedWords,
         start, setStart,
         userInput, setUserInput,
         selectedCustomText, setSelectedCustomText,
         reset, setReset,
         character, setCharacter,
         nextPosition,setNextPosition,
         position,setPosition,
         scrollRef,inputRef,
         totalCharCount, setTotalCharCount,
         currentWordIndex, setCurrentWordIndex,
         checkWord,setCheckWord,
         wrongIndex, setWrongIndex,
         correctIndex, setCorrectIndex,
         timeLeft, setTimeLeft,
         timeCount, setTimeCount,
         intervalRef,
         wordRef,lineCount,
         wordTimeLeft, setWordTimeLeft,
         charCount, setCharCount,
         selectedOption, setSelectedOption,
         results, setResults,
         finishTime,setFinishTime,
         accuracy,setAccuracy,
         wpm, setwpm,
         shuffle, setShuffle,
         selectedSpeed, setSelectedSpeed,
         selectedGameOption, setSelectedGameOption,
         selectedGameWords, setSelectedGameWords,
         selectedGameText, setSelectedGameText,
         selectedTextFile, setSelectedTextFile,
         index, setIndex,
         startGame, setStartGame,
         displayedGameWords, setDisplayedGameWords,
         userGameInput, setUserGameInput,
         currentIndex, setCurrentIndex,
         wordShuffle, setWordShuffle,
         char, setChar,
         wrongGameIndex, setWrongGameIndex,
         checkGameWord, setCheckGameWord,
         gameCharCount,setGameCharCount,
         gameInput, gameResults, setGameResults,
         win, setWin,
         showTexts, setShowTexts

      };

    return (
        <GetValuesContext.Provider value={values}>
            {children}
        </GetValuesContext.Provider>
    )
}
export { GetValuesContext ,  GetValuesProvider};
