import { useState } from "react";
import useQuizzes from "../../hooks/useQuizzes";

const FormEditQuestion = ({ questionEdit , setQuestionEdit}) => {
  
  const [question, setQuestion] = useState(
    questionEdit.question ? questionEdit.question : ""
  );
  const [choices, setChoices] = useState(
    questionEdit.choices.map((choice) => choice)
  );
  const [correctOption, setCorrectOption] = useState(
    questionEdit.correctOption ? questionEdit.correctOption : ""
  );



  const { updateQuestion } = useQuizzes();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const questionData = {
      id: questionEdit.id,
      question: question,
      correctOption: correctOption,
      choices: choices,
      quizId: questionEdit.quizId,
    };

    

    try {
      await updateQuestion(questionData);
      setQuestion("");
      setChoices(["", "", "", ""]);
      setCorrectOption(0);
      setQuestionEdit(null);

      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className=" w-full max-w-md bg-white rounded-lg shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Editar Pregunta</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="question" className="block font-medium mb-1">
                Pregunta
              </label>
              <input
                type="text"
                id="question"
                className="w-full p-2 border rounded"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            {choices.map((choice, index) => (
              <div key={choice.id} className="mb-2">
                <label
                  htmlFor={`option_${index}`}
                  className="block font-medium mb-1"
                >
                  Opción {index + 1}
                </label>
                <input
                  type="text"
                  id={`option_${index}`}
                  className="w-full p-2 border rounded"
                  value={choice.choice ? choice.choice : ""}
                  onChange={(e) => {
                    const newChoices = [...choices];
                    newChoices[index] = { ...choice, choice: e.target.value };
                    setChoices(newChoices);
                  }}
                />
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="correctOption" className="block font-medium mb-1">
                Opción Correcta
              </label>
              <select
                id="correctOption"
                className="w-full p-2 border rounded"
                value={correctOption}
                onChange={(e) => setCorrectOption(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                {choices.map((choice, index) => (
                  <option key={index} value={choice.choice}>
                    {choice.choice}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Guardar Cambios
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                type="button"
                onClick={() => setQuestionEdit(null)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEditQuestion;
