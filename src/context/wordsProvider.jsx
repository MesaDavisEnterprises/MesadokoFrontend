



import { getWords, createWord } from '../services/wordService';


import {useState,useEffect,createContext} from 'react'

const WordContext = createContext();

const WordsProvider = ({children}) => {


    const [words, setWords] = useState([]);

    useEffect(() => {
        
        fetchWords();
    }, []);


    const fetchWords = async () => {
        try {
            const { data } = await getWords();
            
            setWords(data);
        } catch (error) {
            console.log(error);
        }
    }

    const saveWord = async (word) => {
        try {
    
    
            const { data } = await createWord(word);
            
            setWords([...words,data]);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <WordContext.Provider value={
        {words,
         setWords,
         saveWord
        }}>
        {children}
    </WordContext.Provider>

    
  )
}

export {
    WordsProvider
}

export default WordContext
