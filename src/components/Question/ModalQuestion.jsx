import { useState } from "react";

const ModalQuestion = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const [options, setOptions] = useState(["", "", "", ""]);

  const [correctOption, setCorrectOption] = useState(0);

  const handleOptionChange = (index, value) => {
    setOptions((prevOptions) => {
      const updatedOptions = [...prevOptions];
      updatedOptions[index] = value;
      return updatedOptions;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const questionData = {
      question: question,
      correctOption: correctOption,
      choices: options,
    };
    
    await onSubmit(questionData);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOption(0);
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Crear Nueva Pregunta</h2>
      <form onSubmit={handleSubmit}>
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
        {options.map((option, index) => (
          <div key={index} className="mb-2">
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
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
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
            {options.map((text, index) => (
              <option key={index} value={text}>
                {text}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Crear Pregunta
        </button>
      </form>
    </div>
  );
};

export default ModalQuestion;
