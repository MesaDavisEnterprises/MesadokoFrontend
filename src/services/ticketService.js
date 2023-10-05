import clienteAxios from "../../config/Axios";

const token = localStorage.getItem("token");
const getTickets = async () => {
  try {
    const response = await clienteAxios.get("/tickets/all", {
      headers: {
        "x-token": token,
      },
    });


    return response;
  } catch (error) {
    console.log(error);
  }
};

const getStatus = async () => {
  try {
    const response = await clienteAxios.get("/tickets/status");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateTicket = async (ticket) => {
    
  console.log(ticket);
  try {
    const response = await clienteAxios.put(
      `/tickets/update/${ticket.id}`,
      ticket,
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

const downloadExcel = async () => {
  try {
    const response = await clienteAxios.get("/tickets/export", {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getTickets, getStatus, updateTicket, downloadExcel };
