import clienteAxios from "../../config/Axios";

const getQuizzes = async () => {
  try {
    const response = await clienteAxios.get("/quizzes/all");
    
    
    return response;
   
  } catch (error) {
    console.log(error);
  }
};

const getQuizWithQuestions = async (id) => {
    try {
        const response = await clienteAxios.get(`/quizzes/${id}`);
      
        return response;
    } catch (error) {
        console.log(error);
    }
}


export { getQuizzes, getQuizWithQuestions };