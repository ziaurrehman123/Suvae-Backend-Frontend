import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  statBox: {
    backgroundColor: "white",
    borderRadius: "10px",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginTop: "20px",
  },
  infoiconStyle: {
    color: "#8B8FA3",
    marginLeft: "20px",
    marginTop: "4px",
    "&:hover": {
      color: "#7335FD",
    },
  },
  statInnerBox: {
    display: "flex", marginTop: "10px"
  },
  boxInnerWidth:{
    width:"85%", margin:"auto"
  }
}));

export default function StatsSection() {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            
            <Box
              className={classes.statBox}
            >
              <Box className={classes.boxInnerWidth}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
                  <Box className={classes.statInnerBox}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                        fontFamily:"Poppins"
                      }}
                    >
                      Submissions
                    </Typography>
                    <Tooltip
                      title="All of the times the form has been sucessfully submitted"
                      placement="top-start"
                    >
                      <InfoIcon
                        className={classes.infoiconStyle}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      04
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              className={classes.statBox}
            >
               <Box className={classes.boxInnerWidth}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
                  <Box className={classes.statInnerBox}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                        fontFamily:"Poppins"
                      }}
                    >
                      Reviews Acquired
                    </Typography>
                    <Tooltip
                      title="Total amount of reviews aquired"
                      placement="top-start"
                    >
                      <InfoIcon
                        className={classes.infoiconStyle}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      29
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              className={classes.statBox}
            >
              <Box className={classes.boxInnerWidth}>
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
                  <Box className={classes.statInnerBox}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                        fontFamily:"Poppins"
                      }}
                    >
                      Total time saved
                    </Typography>
                    <Tooltip
                      title="Amount of time you saved by automating your form submission process"
                      placement="top-start"
                    >
                      <InfoIcon
                        className={classes.infoiconStyle}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      2h 49m
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
