import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import MenuItem from "@mui/material/MenuItem";
import { Menu, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#FFB200",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#7335FD",
    },
  ],
};

export default function Analytics() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          marginTop: "60px",
          height: "550px",
          borderRadius: "20px",
        }}
      >
        <Box sx={{ width: "90%", margin: "auto", paddingBottom: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                Submission Analytics
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box sx={{ textAlign: "right" }}>
                <Box>
                  <Box
                    sx={{
                      border: "2px solid black",
                      width: {
                        xs: "70%",
                        sm: "50",
                        md: "30",
                        lg: "30%",
                        xl: "30%",
                      },
                      textAlign: "left",
                      marginLeft: "auto",
                      borderRadius: "7px",
                    }}
                  >
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <Typography
                          sx={{ fontSize: "15px", fontWeight: "700" }}
                        >
                          Last 30 days
                        </Typography>
                        <ArrowDropDownIcon sx={{ marginLeft: "60px" }} />
                      </IconButton>
                      <Menu
                        sx={{ marginTop: "55px" }}
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>
                          <Box sx={{ width: "100%" }}>
                            <Typography
                              sx={{ fontSize: "12px", fontWeight: "700" }}
                            >
                              Date Range
                            </Typography>
                            <Select
                              fullWidth
                              value={age}
                              onChange={handleChange}
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="">
                                <em>This Week</em>
                              </MenuItem>
                              <MenuItem value={10}>Yesterday</MenuItem>
                              <MenuItem value={20}>Last 7 Days</MenuItem>
                              <MenuItem value={30}>Last Week</MenuItem>
                              <MenuItem value={30}>Last 14 Days</MenuItem>
                              <MenuItem value={30}>Last 30 Days</MenuItem>
                            </Select>
                            <Box>
                              <Grid container spacing={3}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                      marginTop: "10px",
                                    }}
                                  >
                                    Start Date
                                  </Typography>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DatePicker
                                      value={value}
                                      onChange={(newValue) => {
                                        setValue(newValue);
                                      }}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                      marginTop: "10px",
                                    }}
                                  >
                                    End Date
                                  </Typography>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <DatePicker
                                      value={value}
                                      onChange={(newValue) => {
                                        setValue(newValue);
                                      }}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </LocalizationProvider>
                                </Grid>
                              </Grid>
                            </Box>
                            <Box sx={{ marginTop: "20px", textAlign: "right" }}>
                              <Button
                                variant="outlined"
                                sx={{
                                  borderColor: "#7335FD",
                                  marginRight: "10px",
                                  color: "#7335FD",
                                  fontWeight: "600",
                                  textTransform: "capitalize",
                                }}
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#7335FD",
                                  textTransform: "capitalize",
                                  fontWeight: "600",
                                }}
                              >
                                Apply
                              </Button>
                            </Box>
                          </Box>
                        </MenuItem>
                      </Menu>
                    </div>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Bar options={options} data={data} />
        </Box>
      </Box>
    </>
  );
}
