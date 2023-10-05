

import React from 'react';

import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import DoughnutChart from '../components/charts/DoughnutChart';
import TableUsersTopBuy from '../components/dashboard/TableUsersTopBuy';

const Dashboard = () => {


  return (


    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 px-10">

        <BarChart />
        <LineChart />
        <DoughnutChart />
        <TableUsersTopBuy />
      {/* Puedes agregar más gráficos o componentes aquí */}
    </div>
  )
}

export default Dashboard