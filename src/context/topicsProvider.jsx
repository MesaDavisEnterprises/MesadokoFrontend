import {createContext,useState,useEffect} from 'react'

import { getTopics,createTopic,importTopics,updateTopic,deleteTopic } from '../services/TopicService';

const TopicsContext = createContext();

const TopicsProvider = ({children}) => {
    const [topics,setTopics] = useState([]);
    const [topic,setTopic] = useState(null);

    useEffect(() => {
        fetchTopics();
    }, []);


    const fetchTopics = async () => {
      try {
        const { data } = await getTopics();

        setTopics(data);
      } catch (error) {
        console.log(error);
      }
    };

    const saveTopic = async (topic) => {
      try {

        const { data } = await createTopic(topic);
        console.log(data);
        setTopics([...topics, data]);
      } catch (error) {
        console.log(error);
      }
    }

    const updateTopicState = async (topicUpdate) => {

    
      
      try {
        const { data } = await updateTopic(topicUpdate);


        const newTopics = topics.map((topicItem) => (topicItem.id === data.id ? data : topicItem));

        setTopics(newTopics);
      } catch (error) {
        console.log(error);
      }
    }

    const deleteTopicState = async (id) => {

      try {
        await deleteTopic(id);
        // const newTopics = topics.sort((a, b) => (b.state ? 1 : -1));
        // setTopics(newTopics);
        await fetchTopics();
      } catch (error) {
        console.log(error);
      }
    }

    const changeState = async (topic) => {
       

      const topicUpdate = {
        ...topic,
        state: !topic.state,
      };

      await updateTopicState(topicUpdate);

    

    }


    const importExcel = async (file) => {
      try {
      
        const response = await importTopics(file);
      

        if(response.status === 200){
            await fetchTopics();
            return;
        }

      } catch (error) {
        console.log(error);
      }
    }





  return (
    <TopicsContext.Provider value={
      {topics,
      setTopics,
      saveTopic,
      importExcel,
      updateTopicState,
      deleteTopicState,
      changeState,
      topic,
      setTopic
      }}>
        {children}
    </TopicsContext.Provider>

  )
}

export {
    TopicsProvider
}

export default TopicsContext