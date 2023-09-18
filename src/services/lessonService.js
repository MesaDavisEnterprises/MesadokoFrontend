import clienteAxios from "../../config/Axios";

const getLessons = async () => {
  try {
    const response = await clienteAxios.get("/lessons/all");

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createLesson = async (lesson) => {
  try {
    const response = await clienteAxios.post("/lessons/create", lesson);

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

export { getLessons, createLesson, downloadExcel };
