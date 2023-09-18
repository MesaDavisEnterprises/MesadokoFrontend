import { useEffect, useState } from "react";

import useLevels from "../../hooks/useLevels";
const SelectLevel = ({ handleLevelSelection, lessonSelection }) => {


  const { levels, setLevels } = useLevels();


  const [filterLevels, setFilterLevels] = useState([]);

  useEffect(() => {
    const filterLevels = levels.filter(
      (level) => level.lessonId === lessonSelection.id
    );
    setFilterLevels(filterLevels);
  }, [levels]);

  const handleSelection = (level) => {
    handleLevelSelection(level);
  };
  return (
    <>
      <div className="flex flex-col mt-44 items-center ">
        <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xlxl dark:text-white">
          Select a Level to Continue
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filterLevels.map((level) => (
            <button
              key={level.id}
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 font-medium rounded-xl text-base px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundColor: level.color,
                "--hover-color": `rgba(0, 0, 0, 0.2)`, // Define el tono más oscuro como una variable CSS
              }}
              onClick={() => {
                handleSelection(level);
              }}
            >
              {level.name}
            </button>
          ))}
        </div>


      </div>
    </>
  );
};

export default SelectLevel;
