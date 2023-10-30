import React from "react";
import { Outlet ,Navigate} from "react-router-dom";
import SidebarAdmin from "../components/Sidebars/SidebarAdmin";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth";

const AdminLayout = () => {

  const {auth,cargando} = useAuth();

  
  if(cargando){
    return;
  }


  if (auth?.role.name === 'ADMIN') {

    return (
      <>
  
       <Box sx={{ display: 'flex' }}>
           <SidebarAdmin />
        
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
