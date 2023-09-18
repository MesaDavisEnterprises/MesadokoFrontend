import axios from "axios";

const clienteAxios = axios.create({
    
    baseURL: "http://localhost:8080/api"
})

export default clienteAxios;