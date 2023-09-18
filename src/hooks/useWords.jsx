import { useContext } from "react";

import wordsContext from "../context/wordsProvider";


const useWords = () => {
    
    return useContext(wordsContext)
}


export default useWords;