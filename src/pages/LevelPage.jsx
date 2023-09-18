import { useState } from "react";

import SelectTopic from "../components/Selects/SelectTopic";
import SelectLesson from "../components/Selects/SelectLesson";

import atrasIcon from "../assets/icons/atrasIcon.svg";
import LevelList from "../components/Levels/LevelList";
import ModalLevel from "../components/Levels/ModalLevel";

import { downloadExcel } from "../services/levelService";
import downloadFile from "../utils/downloadFile";

const LevelPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

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

  const handleDownloadExcel = async () => {
    const response = await downloadExcel();

    downloadFile(response, "levels.xlsx");
  }



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

      {selectedLesson && !selectedLevel ? (
        <>
          <button onClick={handleMenuToggleLesson}>
            <img src={atrasIcon} alt="atras" className="w-8 h-8 ml-10 mt-10" />
          </button>
          <div className="flex flex-col mt-44 items-center">
            <div className="flex flex-row justify-between w-10/12 mb-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Levels</h1>

              <ModalLevel lesson={selectedLesson} />

              <button onClick={handleDownloadExcel} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Descargar Excel
              </button>
            </div>

            <LevelList lesson={selectedLesson} />
          </div>
        </>
      ) : null}


    </>
  );
};

export default LevelPage;
