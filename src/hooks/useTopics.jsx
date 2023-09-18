import { useContext } from "react";
import topicsContext from "../context/topicsProvider";


const useTopics = () => {
    
    return useContext(topicsContext)
}


export default useTopics;