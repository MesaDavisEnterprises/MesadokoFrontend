import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import useAuth from "../hooks/useAuth";

const PlayerLayout = () => {
  const { auth, cargando, logout } = useAuth();

  if (cargando) {
    return;
  }

  if (auth?.role.name === "PLAYER") {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          {/* <Sidebar /> */}
          {<h1>Sidebbar JUgador </h1>}

            <button sx={{ display: "flex" }}
                onClick={() => logout()}
                >
                Logout
            </button>

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

export default PlayerLayout;
