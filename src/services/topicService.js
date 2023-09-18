import clienteAxios from "../../config/Axios";

const token = localStorage.getItem("token");

const getTopics = async () => {
  try {
    const response = clienteAxios.get("/topics/all");

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createTopic = async (topic) => {
  try {
    const response = await clienteAxios.post("/topics/create", topic);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const updateTopic = async (topic) => {
  try {
    const response = await clienteAxios.put(
      `/topics/update/${topic.id}`,
      topic,
      {
        headers: {
          "x-token": token,
        },
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

const deleteTopic = async (id) => {
  try {
    const response = await clienteAxios.delete(`/topics/delete/${id}`, {
      headers: {
        "x-token": token,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const importTopics = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const response = await clienteAxios.post("/topics/import", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const downloadExcel = async () => {
  try {
    const response = await clienteAxios.get("/topics/export", {
      responseType: "blob", // Indicar que esperamos una respuesta binaria
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getTopics,
  createTopic,
  downloadExcel,
  importTopics,
  updateTopic,
  deleteTopic,
};
