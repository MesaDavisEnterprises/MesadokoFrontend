import clienteAxios from "../../config/Axios";

const getLevels = async () => {
  try {
    const response = await clienteAxios.get("/levels/all");

    return response;
  } catch (error) {
    console.log(error);
  }
};

const createLevel = async (level) => {
  try {
    const response = await clienteAxios.post("/levels/create", level);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const downloadExcel = async () => {
  try {
    const response = await clienteAxios.get("/levels/export", {
      responseType: "blob", // Indicar que esperamos una respuesta binaria
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getLevels, createLevel , downloadExcel};
