import { useState } from "react";
import SelectTopic from "../components/Selects/SelectTopic";
import SelectLesson from "../components/Selects/SelectLesson";
import atrasIcon from "../assets/icons/atrasIcon.svg";
import LevelList from "../components/Levels/LevelList";
import QuizList from "../components/Quizzes/QuizList";
import ModalQuiz from "../components/Quizzes/ModalQuiz";


const QuizzesPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);


  // Función para manejar la selección de un topic
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  //Funcion para dar click en el boton de atras
  const handleMenuToggleTopic = () => {
    setSelectedTopic(null);
  };

  const handleMenuToggleLesson = () => {
    setSelectedLesson(null);
  };

  return (
    <>
      {!selectedTopic ? (
        <SelectTopic handleTopicSelection={handleTopicSelection} />
      ) : null}

      {selectedTopic && !selectedLesson ? (
        <>
          <button onClick={handleMenuToggleTopic}>
            <img src={atrasIcon} alt="atras" className="w-8 h-8 ml-10 mt-10" />
          </button>
          <SelectLesson
            handleLessonSelection={handleLessonSelection}
            topicSelection={selectedTopic}
          />
        </>
      ) : null}

      {selectedLesson ?  (
        <>
           <button onClick={handleMenuToggleLesson}>
            <img src={atrasIcon} alt="atras" className="w-8 h-8 ml-10 mt-10" />
          </button>
          <div className="flex flex-col mt-44 items-center">
            <div className="flex flex-row justify-between w-10/12 mb-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Quizzes</h1>

              <ModalQuiz lesson={selectedLesson}/>
            </div>


            <QuizList lesson={selectedLesson} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default QuizzesPage;
