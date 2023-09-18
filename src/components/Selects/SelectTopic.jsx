

import React from 'react'

import useTopics from '../../hooks/useTopics';

const SelectTopic = ({ handleTopicSelection }) => {
  const { topics, setTopics } = useTopics();

  const handleSelection = (topic) => {
    handleTopicSelection(topic);
  }

  return (
    <>
      <div className="flex flex-col mt-44 items-center ">
        <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xlxl dark:text-white">
          Select a Topic to Continue
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 font-medium rounded-xl text-base px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105"
              style={{
                backgroundColor: topic.color,
                "--hover-color": `rgba(0, 0, 0, 0.2)`, // Define el tono más oscuro como una variable CSS
              }}
              onClick={() => {
                handleSelection(topic);
              }}
            >
              {topic.name}
            </button>
          ))}
        </div>


      </div>
    </>
  )
}

export default SelectTopic