import {useState,useEffect} from "react";

import { getTickets } from "../services/ticketService";
import TicketList from "../components/Tickets/TicketsList";


const TicketsPage = () => {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            const data = await getTickets();
            setTickets(data);
        };
        fetchTickets();
    }
    ,[]);


//   const [tickets, setTickets] = useState([
//     {
//         "id": "6829eb8a-ace5-481d-9afb-57ccc903843e",
//         "subject": "No me abre",
//         "email": "pipe@gmail.com",
//         "message": "Al iniciar sesion no me abre",
//         "statusId": 1,
//         "createdAt": "2023-09-04T17:38:34.635Z",
//         "status": {
//             "id": 1,
//             "name": "Pendiente"
//         }
//     },
//     {
//         "id": "9485854f-fa3e-4b43-9780-ce4644322057",
//         "subject": "Compre monedas y no me llegaron",
//         "email": "jorge@hotmail.com",
//         "message": "hice el pago pero no me llegaron",
//         "statusId": 2,
//         "createdAt": "2023-09-05T14:29:19.145Z",
//         "status": {
//             "id": 2,
//             "name": "Progeso"
//         }
//     },
//     {
//         "id": "f0902016-807f-4ba9-b25c-21a3e918d298",
//         "subject": "No me da el juego",
//         "email": "andres.chica121@hotmail.com",
//         "message": "no da",
//         "statusId": 1,
//         "createdAt": "2023-09-05T13:38:26.628Z",
//         "status": {
//             "id": 1,
//             "name": "Pendiente"
//         }
//     }
//   ]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Tickets de Soporte</h1>
      <TicketList tickets={tickets} />
    </div>
  );
};

export default TicketsPage;
