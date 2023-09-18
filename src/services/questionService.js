import clienteAxios from "../../config/Axios";

const token = localStorage.getItem("token");

const getQuestions = async () => {
  try {
    const response = await clienteAxios.get("/questions/all");

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (question) => {
  try {
    const response = await clienteAxios.post("/questions/create", question, {
      headers: {
        "x-token": token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};


const updateQuestion = async (question) => {

  console.log(question)
  try {
    const response = await clienteAxios.put(`/questions/update/${question.id}`, question, {
      headers: {
        "x-token": token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};


const deleteQuestion = async (id) => {


  try {
    const response = await clienteAxios.delete(`/questions/delete/${id}`, {
      headers: {
        "x-token": token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}


export { getQuestions, createQuestion, updateQuestion,deleteQuestion};
