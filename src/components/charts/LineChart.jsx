import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const lessonSalesData = {
    Enero: 20,
    Febrero: 10,
    Marzo: 15,
    Abril: 30,
    Mayo: 20,
    Junio: 25,
    Julio: 10,
    Agosto: 15,
    Septiembre: 20,
    Octubre: 25,
    Noviembre: 30,
    Diciembre: 35,
  };

  const data = {
    labels: Object.keys(lessonSalesData),
    datasets: [
      {
        label: "Ventas por mes",
        data: Object.values(lessonSalesData),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
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
        text: "Ventas por mes",
      },
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6 ">

        <div className="">
            <Line data={data} options={options} />
        </div>
      
    </div>
  );
};

export default LineChart;
