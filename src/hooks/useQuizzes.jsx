import { useContext } from "react";
import QuizContext from "../context/QuizProvider";


const useQuizzes = () => {
    
    return useContext(QuizContext)
}


export default useQuizzes;