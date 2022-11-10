import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

export default function StatsSection() {
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "20px",
              }}
            >
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ display: "flex", marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                      }}
                    >
                      Submissions
                    </Typography>
                    <Tooltip
                      title="All of the times the form has been sucessfully submitted"
                      placement="top-start"
                    >
                      <InfoIcon
                        sx={{
                          color: "#7335FD",
                          marginLeft: "20px",
                          marginTop: "4px",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      04
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "20px",
              }}
            >
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ display: "flex", marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                      }}
                    >
                      Reviews Acquired
                    </Typography>
                    <Tooltip
                      title="Total amount of reviews aquired"
                      placement="top-start"
                    >
                      <InfoIcon
                        sx={{
                          color: "#7335FD",
                          marginLeft: "20px",
                          marginTop: "4px",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      29
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                paddingRight: "10px",
                marginTop: "20px",
              }}
            >
              <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ display: "flex", marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#8B8FA3",
                      }}
                    >
                      Total time saved
                    </Typography>
                    <Tooltip
                      title="Amount of time you saved by automating 
your form submission process"
                      placement="top-start"
                    >
                      <InfoIcon
                        sx={{
                          color: "#7335FD",
                          marginLeft: "20px",
                          marginTop: "4px",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontSize: "36px", fontWeight: "600" }}>
                      2h 49m
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
