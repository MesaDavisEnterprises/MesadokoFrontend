import { useState } from "react";

import SelectTopic from "../components/Selects/SelectTopic";
import SelectLesson from "../components/Selects/SelectLesson";
import SelectLevel from "../components/Selects/SelectLevel";

import WordList from "../components/Words/WordList";

import atrasIcon from "../assets/icons/atrasIcon.svg";
import ModalWord from "../components/Words/ModalWord";

import { downloadExcel } from "../services/wordService";
import downloadFile from "../utils/downloadFile";

const WordsPage = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  const handleLessonSelection = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
  };

  const handleMenuToggleTopic = () => {
    setSelectedTopic(null);
    setSelectedLesson(null);
  };

    const handleMenuToggleLesson = () => {
    setSelectedLesson(null);
    setSelectedLevel(null);
    };

    const handleDownloadExcel = async () => {
    const response = await downloadExcel();

    downloadFile(response, "words.xlsx");
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
          <SelectLevel
            handleLevelSelection={handleLevelSelection}
            lessonSelection={selectedLesson}
          />
        </>
      ) : null}

      {selectedLevel ? (
        <>
          <button onClick={handleMenuToggleLesson}>
            <img src={atrasIcon} alt="atras" className="w-8 h-8 ml-10 mt-10" />
          </button>
          <div className="flex flex-col mt-44 items-center">
            <div className="flex flex-row justify-between w-10/12 mb-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Words</h1>

              <ModalWord level={selectedLevel} />

              <button onClick={handleDownloadExcel} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Descargar Excel
              </button>

            </div>

            <WordList level={selectedLevel} />
          </div>
          
        </>
      ) : null}
    </>
  );
};

export default WordsPage;
