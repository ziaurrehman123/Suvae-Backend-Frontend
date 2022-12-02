import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { DatePicker, Button, Space } from 'antd';
import dayjs from 'dayjs';
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

import ReactApexChart from "react-apexcharts";
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
  divider: {
    backgroundColor: "#D6DAE1",
    height: "1px",
    width: "100%",
    marginTop: "20px",
    marginBottom: "10px",
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

const { RangePicker } = DatePicker;

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//       display:false
//     },
//     title: {
//       display: false,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "#FFB200",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "#7335FD",
//     },
//   ],
// };

export default function Analytics() {

  const dateFormat = 'YYYY-MM-DD';
  const classes = useStyles();

  const [options, setOptions] = useState(
    {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'around',
          borderRadiusWhenStacked: 'all',
          rangeBarOverlap: false,
          rangeBarGroupRows: true,
          distributed: false,
          dataLabels: {
            hideOverflowingLabels: true,
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        },
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        type: 'category',
        categories: months,
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      markers:{},
      colors:[
        '#FDA700', '#7335FD'
      ],
      fill: {
        opacity: 1
      }
    }
  );

  const [datas, setDatas] = useState([
    {
      name: "UnVerified",
      data: months.map(() => faker.datatype.number({ min: 0, max: 50 })),
    },
    {
      name: "Verified",
      data: months.map(() => faker.datatype.number({ min: 0, max: 50 })),
    }
  ])

  const [dateRange, setDateRange] = useState([dayjs(new Date).add(-2, 'week').format(dateFormat), dayjs(new Date()).format(dateFormat)])

  const setThisWeek = () => {
    const currentDate = dayjs(new Date());
    const startDate = currentDate.startOf("week").format(dateFormat);
    const endDate = currentDate.endOf("week").format(dateFormat)
    setDateRange([startDate, endDate])
  }

  const setThisMonth = () => {
    const currentDate = dayjs(new Date());
    const startDate = currentDate.startOf("month").format(dateFormat);
    const endDate = currentDate.endOf("month").format(dateFormat)
    setDateRange([startDate, endDate])
  }

  useEffect(() => {
    const temp_options = { ...options };
    const startDate = dayjs(dateRange[0]);
    const endDate = dayjs(dateRange[1]);
    const duration = endDate.diff(startDate, "day");
    let temp_labels = [];
    let temp_datas = [];
    if (duration < 8) {
      // display date
      for (let i = 0; i <= duration; i++) {
        const label = dayjs(startDate).add(i, "day").format(dateFormat);
        temp_labels.push(label)
      }
      temp_options.xaxis = {
        type: "category",
        categories: temp_labels
      }
    }
    if (duration > 7 && duration < 60) {
      let startWeek = startDate.week();
      let endWeek = endDate.week();
      if (endDate.get("year") > startDate.get("year")) {
        endWeek = 53*(endDate.get("year") - startDate.get("year"))+endWeek;
      }
      for (let i = startWeek; i <= endWeek; i++) {
        const calcWeek = dayjs(startDate).add( i - startWeek, "week");
        const tStart = calcWeek.startOf("week");
        const tEnd = calcWeek.endOf("week");

        const tsMonth = months[tStart.get('month')].substring(0,3);
        const teMonth = months[tEnd.get('month')].substring(0,3);


        const label =  tsMonth + " " + tStart.get('date') + " - " + teMonth +" "+ tEnd.get('date');
        temp_labels.push(label)
      }
      temp_options.xaxis = {
        type: "category",
        categories: temp_labels
      }
    }
    if (duration > 60) {
      let startMonth = startDate.month();
      let endMonth = endDate.month();
      if (endDate.get("year") > startDate.get("year")) {
        endMonth = 12*(endDate.get("year") - startDate.get("year")) + endMonth;
      }
      for (let i = startMonth; i <= endMonth; i++) {
        const label = months[i%12];
        temp_labels.push(label)
      }
      temp_options.xaxis = {
        type: "category",
        categories: temp_labels
      }
    }

    temp_datas = [
      {
        name: "Unverified",
        data: temp_labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      },
      {
        name: "Verified",
        data: temp_labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      }
    ]

    setOptions(temp_options);
    setDatas(temp_datas);
  }, [dateRange])

  return (
    <>
      <Box
        className={classes.mainComponent}
      >
        <Box className={classes.analyticsComponent}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500", fontFamily: "Poppins" }}>
                Submission Analytics
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
              <Box sx={{ textAlign: "right" }}>
                <Box>
                  <RangePicker
                    renderExtraFooter={
                      () =>
                        <div style={{ padding: 10}}>
                          <Space>
                            <Button type='primary' onClick={()=>setThisWeek()}>This Week</Button>
                            <Button type='primary' onClick={()=>setThisMonth()}>This Month</Button>
                          </Space>
                          
                        </div>
                    }
                    value={[dayjs(dateRange[0], dateFormat), dayjs(dateRange[1], dateFormat)]}
                    onChange={(date, dateString) => setDateRange(dateString)}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className={classes.divider}></Box>
        </Box>

        <Box sx={{ width: "90%", margin: "auto" }}>
          <ReactApexChart options={options} series={datas} type="bar" height={350} />
        </Box>
      </Box>
    </>
  );
}
