import React,{useState} from "react";
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
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import dayjs from "dayjs";

//styling
const useStyles = makeStyles((theme) => ({
  mainComponent: {
    backgroundColor: "white",
    marginTop: "60px",
    height: "872px",
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
  dateInput: {
    marginTop: "10px"
  },
  btnsBox: {
    marginTop: "20px", textAlign: "right"
  },
  cancelBtn: {
    borderColor: "#7335FD",
    marginRight: "10px",
    color: "#7335FD",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  applyBtn: {
    backgroundColor: "#7335FD",
    textTransform: "capitalize",
    fontWeight: "600",
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
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const classes = useStyles();
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
        className={classes.mainComponent}
      >
        <Box className={classes.analyticsComponent}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                Submission Analytics
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
              <Box sx={{ textAlign: "right" }}>
                <Box>
                 
             
                      <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>
                    
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
