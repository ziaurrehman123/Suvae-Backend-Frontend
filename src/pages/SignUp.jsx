import React from "react";
import { Box } from "@mui/material";
import RegistrationComponent from "../components/Registration";
import MobileView from "../components/MobileView";

export default function SignUp() {
  return (
    <div>
      {window.screen.width >= 768 ? (
        <Box>
          <RegistrationComponent />
        </Box>
      ) : (
        <MobileView />
      )}
    </div>
  );
}
