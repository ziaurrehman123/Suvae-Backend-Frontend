import React from "react";
import { Box } from "@mui/material";
import SignInComponent from "../components/SignIn";
import MobileView from "../components/MobileView";

export default function SignIn() {
  return (
    <div>
      <Box className="mobileView">
        <MobileView />
      </Box>
      <Box className="mainPage">
        <Box>
          <SignInComponent />
        </Box>
      </Box>
    </div>
  );
}
