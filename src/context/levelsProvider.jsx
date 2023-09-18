

import { getLevels, createLevel } from '../services/levelService';


import {useState,useEffect,createContext} from 'react'

const LevelContext = createContext();

const LevelsProvider = ({children}) => {


    const [levels, setLevels] = useState([]);

    useEffect(() => {
        
        fetchLevels();
    }, []);


    const fetchLevels = async () => {
        try {
            const { data } = await getLevels();
            
            setLevels(data);
        } catch (error) {
            console.log(error);
        }
    }

    const saveLevel = async (level) => {
        try {
    
            const { data } = await createLevel(level);
            
            setLevels([...levels,data]);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <LevelContext.Provider value={
        {levels,
         setLevels,
         saveLevel
        }}>
        {children}
    </LevelContext.Provider>

    
  )
}

export {
    LevelsProvider
}

export default LevelContext

