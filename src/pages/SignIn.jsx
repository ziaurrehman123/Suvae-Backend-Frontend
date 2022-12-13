import React from "react";
import { Box } from "@mui/material";
import SignInComponent from "../components/SignIn";
import MobileView from "../components/MobileView";

export default function SignIn() {
  return (
    <div>
      {window.screen.width >= 768 ? (
        <Box>
          <SignInComponent />
        </Box>
      ) : (
        <MobileView />
      )}
    </div>
  );
}
