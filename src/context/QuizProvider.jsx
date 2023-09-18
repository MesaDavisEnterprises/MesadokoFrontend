import { useState, useEffect, createContext } from "react";
import { getQuizzes, getQuizWithQuestions } from "../services/QuizService";
import { createQuestion as create, updateQuestion as update , deleteQuestion as deleteQ } from "../services/questionService";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const { data } = await getQuizzes();

      setQuizzes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchQuizWithQuestions = async (id) => {
    try {
      const { data } = await getQuizWithQuestions(id);

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createQuestion = async (questionData) => {
    try {
      const { data } = await create(questionData);
    
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuestion = async (questionData) => {
    try {
      const { data } = await update(questionData);
      
      await fetchQuizzes();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      const { data } = await deleteQ(id);
      
      await fetchQuizzes();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <QuizContext.Provider
      value={{
        quizzes,
        fetchQuizWithQuestions,
        createQuestion,
        updateQuestion,
        deleteQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizProvider };

export default QuizContext;
