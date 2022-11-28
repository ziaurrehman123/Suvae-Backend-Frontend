import React from "react";
import { Box, Grid, Typography, } from "@mui/material";
import { makeStyles } from "@material-ui/core";
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

//styling
const useStyles = makeStyles((theme) => ({
  mainComponent: {
    backgroundColor: "white",
    marginTop: "60px",
    height: "570px",
    borderRadius: "20px",
  },
  analyticsComponent: {
    width: "90%", margin: "auto", paddingBottom: "20px"
  },
  dateRangeInput: {
    border: "2px solid black",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    textAlign: "left",
    marginLeft: "auto",
    borderRadius: "7px",
  },
divider:{
  backgroundColor:"#D6DAE1",
  height:"1px",
  width:"100%",
  marginTop:"20px",
  marginBottom:"10px",
}

}));

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
      display:false
    },
    title: {
      display: false,
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
  
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.mainComponent}
      >
        <Box className={classes.analyticsComponent}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500",fontFamily:"Poppins" }}>
                Submission Analytics
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
              <Box sx={{ textAlign: "right" }}>
                <Box>
                <input type="text" name="daterange" value="01/01/2018 - 01/15/2018" />     
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.divider}></Box>
        </Box>
        
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Bar options={options} data={data} />
        </Box>
      </Box>
    </>
  );
}
