import { useState, useEffect } from "react";

import TicketList from "../components/Tickets/TicketsList";
import useTickets from "../hooks/useTickets";
import DownloadExcelButton from "../components/DownloadExcelButton";

const TicketsPage = () => {
  const { tickets, setTickets } = useTickets();



  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-center">
          Tickets de Soporte
        </h1>
        <DownloadExcelButton tickets={tickets} />
      </div>
      <TicketList tickets={tickets} />
    </div>
  );
};

export default TicketsPage;
