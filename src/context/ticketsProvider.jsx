import { useEffect, useState,createContext } from "react";
import { getTickets } from "../services/ticketService";

const TicketsContext = createContext();

const TicketsProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
       fetchTickets();
  }, []);

  


  const fetchTickets = async () => {
    try {
      const { data } = await getTickets();
      console.log(data);
      setTickets(data);
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <TicketsContext.Provider value={{ tickets, setTickets }}>
        {children}
        </TicketsContext.Provider>
    );
};

export {
    TicketsProvider
}

export default TicketsContext;
