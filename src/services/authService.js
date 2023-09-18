import clienteAxios from "../../config/Axios";

const login = async (user) => {
  try {

    const response = await clienteAxios.post("/auth/login-admin", user);

  

    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getProfile = async (token) => {

  
  try {

    const response = await clienteAxios.get("/users/profile", {
      headers: {
        "x-token": token,
      },
    });
    
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { login, getProfile };
