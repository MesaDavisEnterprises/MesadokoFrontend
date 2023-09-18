
import { getLessons,createLesson } from '../services/lessonService';


import {useState,useEffect,createContext} from 'react'

const LessonContext = createContext();

const LessonsProvider = ({children}) => {


    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        
        fetchLessons();
    }, []);


    const fetchLessons = async () => {
        try {
            const { data } = await getLessons();
            setLessons(data);
        } catch (error) {
            console.log(error);
        }
    }

    const saveLesson = async (lesson) => {
        try {
            const { data } = await createLesson(lesson);
            
            setLessons([...lessons,data]);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <LessonContext.Provider value={
        {lessons,
         setLessons,
         saveLesson
        }}>
        {children}
    </LessonContext.Provider>

    
  )
}

export {
    LessonsProvider
}

export default LessonContext