import { useContext } from "react";
import levelsContext from "../context/levelsProvider";


const useLevels = () => {
    
    return useContext(levelsContext)
}


export default useLevels;