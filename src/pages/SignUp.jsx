import React from "react";
import { Box } from "@mui/material";
import RegistrationComponent from "../components/Registration";
import MobileView from "../components/MobileView";

export default function SignUp() {
  return (
    <div>
      <Box className="mobileView">
        <MobileView />
      </Box>
      <Box className="mainPage">
        <Box>
          <RegistrationComponent />
        </Box>
      </Box>
    </div>
  );
}
