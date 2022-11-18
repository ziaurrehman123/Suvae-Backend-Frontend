import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import question from "../assets/images/question.png";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

//styling
const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "white",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    marginRight: "auto",
    border: "1px solid #DBD7F4",
    borderRadius: "5px",
  },
  mainBoxContent: {
    marginTop: "30px",
  },
  content: {
    display: "flex",
    padding: "20px",
    width: "80%",
    margin: "auto",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function Misc() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Box sx={{ width: "90%", margin: "auto", paddingTop: "30px" }}>
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "900",
              borderBottom: "2px solid black",
              width: { xs: "76%", sm: "76%", md: "17%", lg: "17%", xl: "17%" },
            }}
          >
            Form Submissions
          </Typography>
          <Box className={classes.mainBoxContent}>
            <Box className={classes.mainBox}>
              <Box className={classes.content}>
                <FormControlLabel control={<IOSSwitch defaultChecked />} />
                <Typography>Incentive After Review Verification</Typography>
                <Tooltip
                  title="By default, incentives are sent to your customer 72 hours after a Form Submission, regardless of the Review Status.

                        Enabling this waits for the Review Status to change to Verified before sending the incentive."
                  placement="top-start"
                >
                  <Box
                    component="img"
                    sx={{
                      height: "17px",
                      width: "17px",
                      position: "relative",
                      top: "3px",
                      left: "20px",
                    }}
                    alt="Your logo."
                    src={question}
                  />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
