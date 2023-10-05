import { useContext } from "react";
import TicketsContext from "../context/ticketsProvider";


const useTickets = () => {
    
    return useContext(TicketsContext)
}


export default useTickets;