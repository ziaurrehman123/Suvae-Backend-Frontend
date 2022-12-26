import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Asidebar from "../components/Asidebar";
import HeadingSection from "../components/ClientDashboard/HeadingSection";
import MobileView from "../components/MobileView";
import ClientsTable from "../components/ClientDashboard/Clientstable";

export default function ClientDashboard() {
  return (
    <>
      <Box className="mobileView">
        <MobileView />
      </Box>
      <Box className="mainPage">
        <Header />
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            sx={{
              width: { xs: "16%", sm: "10%", md: "8%", lg: "7%", xl: "5%" },
            }}
          >
            <Asidebar />
          </Box>
          <Box
            sx={{
              width: { xs: "79%", sm: "85%", md: "87%", lg: "88%", xl: "90%" },
              margin: "auto",
              marginTop: "-10px",
            }}
          >
            <HeadingSection />
            <ClientsTable />
          </Box>
        </Box>
      </Box>
    </>
  );
}
