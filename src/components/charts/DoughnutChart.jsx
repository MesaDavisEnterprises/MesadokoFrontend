import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [currentTopic, setCurrentTopic] = useState("Ingles");
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const handleNextTopic = () => {
    const topics = Object.keys(lessonDataByTopic);
    const nextTopicIndex =
      currentTopicIndex === topics.length - 1 ? 0 : currentTopicIndex + 1;
    setCurrentTopic(topics[nextTopicIndex]);
    setCurrentTopicIndex(nextTopicIndex);
  };

  const handlePreviousTopic = () => {
    const topics = Object.keys(lessonDataByTopic);
    const previousTopicIndex =
      currentTopicIndex === 0 ? topics.length - 1 : currentTopicIndex - 1;
    setCurrentTopic(topics[previousTopicIndex]);
    setCurrentTopicIndex(previousTopicIndex);
  };

  const lessonDataByTopic = {
    Ingles: {
      Leccion1: 10,
      Leccion2: 8,
      Leccion3: 15,
    },
    Frances: {
      Leccion1: 5,
      Leccion2: 12,
      Leccion3: 6,
    },
    Aleman: {
      Leccion1: 8,
      Leccion2: 10,
      Leccion3: 12,
      leccion4: 15,
      leccion5: 3,
    },
  };

  const data = {
    labels: Object.keys(lessonDataByTopic[currentTopic]),
    datasets: [
      {
        label: "Ventas por topic",
        data: Object.values(lessonDataByTopic[currentTopic]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Ventas por topic de ${currentTopic}`,
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="col-span-8 bg-white sm:col-span-6 ">
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePreviousTopic}>
          Anterior
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNextTopic}>
          Siguiente
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center px-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
