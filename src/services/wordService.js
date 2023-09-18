
import clienteAxios from "../../config/Axios";

const getWords = async () => {
    try {
        const response = await clienteAxios.get("/words/all");
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createWord = async (word) => {
    try {
        const response = await clienteAxios.post("/words/create", word);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const downloadExcel = async () => {
    try {
        const response = await clienteAxios.get("/words/export", {
            responseType: "blob", // Indicar que esperamos una respuesta binaria
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export {
    getWords,
    createWord,
    downloadExcel
}