import { useEffect, useState } from "react";

import { downloadExcel } from "../services/lessonService";
import downloadFile from "../utils/downloadFile.js";

import atrasIcon from "../assets/icons/atrasIcon.svg";

import LessonList from "../components/Lessons/LessonList";
import SelectTopic from "../components/Selects/SelectTopic";

import useTopics from "../hooks/useTopics";
import useLessons from "../hooks/useLessons";
import ModalLesson from "../components/Lessons/ModalLesson";

const LessonsPage = () => {
  const { topics, setTopics } = useTopics();
  const { lessons, setLessons, saveLesson } = useLessons();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleMenuToggle = () => {
    setSelectedTopic(null);
  };

  const handleCreateLesson = async (lesson) => {
    await saveLesson(lesson);
  };

  // Función para manejar la selección de un topic
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  const handleDownloadExcel = async () => {
    const response = await downloadExcel();

    downloadFile(response, "lessons.xlsx");
  }

  return (
    <>
      {!selectedTopic ? (
          <SelectTopic handleTopicSelection={handleTopicSelection} />
      ) : null}

      {selectedTopic  ? (
        <>
          <button onClick={handleMenuToggle}>
            <img src={atrasIcon} alt="atras" className="w-8 h-8 ml-10 mt-10" />
          </button>
          <div className="flex flex-col mt-44 items-center">
            <div className="flex flex-row justify-between w-10/12 mb-10 mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Lessons</h1>

              <ModalLesson topic={selectedTopic} handleCreate={handleCreateLesson} />

              <button onClick={handleDownloadExcel} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Descargar Excel
              </button>

              
            </div>

            <LessonList topic={selectedTopic} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default LessonsPage;
