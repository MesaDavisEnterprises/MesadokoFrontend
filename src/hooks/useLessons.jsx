import { useContext } from "react";
import lessonsContext from "../context/lessonsProvider";


const useLessons = () => {
    
    return useContext(lessonsContext)
}


export default useLessons;