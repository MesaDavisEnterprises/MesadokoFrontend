import { useState,useEffect } from "react";
import { getStatus ,updateTicket} from "../../services/ticketService.js";
import Pagination from "../pagination.jsx";


const TicketsList = ({ tickets }) => {

  const [currentPage, setCurrentPage] = useState(0)
  
  const itemsPerPage = 10;

  const pageCount = Math.ceil(tickets.length / itemsPerPage);

  const offset = currentPage * itemsPerPage;

  const currentPageData = tickets.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const [statusOptions, setStatusOptions] = useState([
    "Pendiente",
    "Progreso",
    "Resuelto",
  ]);


  const onUpdateStatus = async (id, status) => {
    const data = await updateTicket(id, status);
    console.log(data);
  };

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full bg-white shadow-lg mx-auto">
        <div className="flex justify-center mt-4">
         <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />
        </div>
        <thead>
          <tr>
            <th className="py-3 px-6 text-left">Asunto</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Mensaje</th>
            <th className="py-3 px-6 text-left">Estado</th>
            <th className="py-3 px-6 text-left">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((ticket) => (
            <tr key={ticket.id}>
              <td className="py-3 px-6">{ticket.subject}</td>
              <td className="py-3 px-6">{ticket.email}</td>
              <td className="py-3 px-6">{ticket.message}</td>
              <td
                className={`py-3 px-6 text-${
                  ticket.status.name === "Pendiente" ? "red" : "blue"
                }-500`}
              >
                {ticket.status.name}
              </td>
              <td className="py-3 px-6">
                <select
                  value={ticket.status.name}
                  onChange={(e) => onUpdateStatus(ticket.id, e.target.value)}
                  className={`bg-${
                    ticket.status.name === "Pendiente" ? "blue" : "red"
                  }-500 text-white px-4 py-2 rounded-md`}
                >
                  {statusOptions.map((option) => (
                    <option key={option.id} value={option.name}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketsList;
