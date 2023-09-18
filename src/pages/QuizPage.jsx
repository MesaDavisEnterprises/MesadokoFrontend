import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalQuestion from "../components/Question/ModalQuestion";
import useQuizzes from "../hooks/useQuizzes";
import FormEditQuestion from "../components/Question/FormEditQuestion";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [editingQuestion, setEditingQuestion] = useState({});
  const { id } = useParams();
  const { fetchQuizWithQuestions, createQuestion,deleteQuestion } = useQuizzes();

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetchQuizWithQuestions(id);

      setQuestions(data.questions);
    };
    fetchQuestions();
  }, [id, fetchQuizWithQuestions]);

  const [creatingQuestion, setCreatingQuestion] = useState(false);

  const handleToggleCreationPanel = () => {
    setCreatingQuestion(!creatingQuestion);
  };

  const handleQuestionSubmit = async (questionData) => {
    const question = {
      question: questionData.question,
      correctOption: questionData.correctOption,
      choices: questionData.choices,
      quizId: id,
    };

    try {
      const { data } = await createQuestion(question);

      const response = await fetchQuizWithQuestions(id);
      setQuestions(response.questions);
      setCreatingQuestion(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestionEdit = async (question) => {
    setEditingQuestion(question);
  };

  const handleQuestionDelete = async (id) => {

    const confirm =window.confirm("¿Estas seguro de eliminar la pregunta?");

    if(!confirm) return;

    try {
      await deleteQuestion(id);
     
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Panel de Quiz
        </h1>

        {editingQuestion?.id && (
          <FormEditQuestion questionEdit={editingQuestion} setQuestionEdit={setEditingQuestion} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4">
          {creatingQuestion ? (
            <ModalQuestion onSubmit={handleQuestionSubmit} />
          ) : (
            <button
              onClick={handleToggleCreationPanel}
              className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
            >
              Crear Nueva Pregunta
            </button>
          )}
          {questions.map((question) => (
            <div
              key={question.id}
              className="bg-white p-6 shadow rounded-lg transform transition-transform hover:scale-105"
            >
              <h3 className="text-lg font-semibold mb-4">
                {question.question}
              </h3>
              <ul>
                {question.choices.map((option) => (
                  <li
                    key={option.id}
                    className={`flex items-center space-x-2 p-2 ${
                      question.correctOption === option.choice
                        ? "bg-green-100"
                        : "bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      className="text-blue-500"
                      disabled
                      checked={question.correctOption === option.choice}
                    />
                    <span
                      className={`${
                        question.correctOption === option.choice
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {option.choice}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  onClick={() => handleQuestionEdit(question)}
                >
                  Editar
                </button>

                <button className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
                onClick={() => handleQuestionDelete(question.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizPage;
