import React from "react";
import { Outlet ,Navigate} from "react-router-dom";
import Sidebar from "../components/Master/Sidebar";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth";

const AdminLayout = () => {

  const {auth,cargando} = useAuth();

  
  if(cargando){
    return;
  }

  if (auth) {

    return (
      <>
  
       <Box sx={{ display: 'flex' }}>
           <Sidebar />
        
            <div className="w-full bg-gray-100">
               <Outlet />
            </div>
        </Box>
        
      </>
    );
      
  } else {
  
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
  
};

export default AdminLayout;
