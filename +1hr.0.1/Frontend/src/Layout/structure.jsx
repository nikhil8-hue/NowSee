import React from "react";
import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/common/nav";

const Structure = () => {
  const location = useLocation();
  const hideNavForPaths = ["/", "/choose-role"];
  const shouldShowNav = !hideNavForPaths.includes(location.pathname);

  return (
    <>
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          overflowX: 'hidden' // Only prevent horizontal scroll
        }}
      >
        {shouldShowNav && <Nav />}
        
        <Box
          component="main"
          sx={{
            flex: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Outlet /> {/* This renders the current route's component */}
        </Box>
      </Box>
    </>
  );
};

export default Structure;