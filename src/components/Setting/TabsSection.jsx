import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AccountSection from "./AccountSection";
import BillingSection from "./BillingSection";
import BillingHistory from "./BillingHistory";
import { AmazonSetting } from "./AmazonSetting";
import Misc from "../MiscComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  style: {
    border: "1px solid rgba(145, 146, 148, 0.3)",
    color: "rgba(30, 30, 30, 0.45)",
    borderRadius: "10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    textTransform: "capitalize",
    fontWeight: "600",
    margin: "10px",
    "&.Mui-selected": {
      backgroundColor: "#5541D8",
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
    },
  },
}));

export default function TabsSection() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="Account"
          wrapped
          {...a11yProps("one")}
          className={classes.style}
        />
        <Tab
          value="two"
          label="Amazon Settings"
          {...a11yProps("two")}
          className={classes.style}
        />
            <Tab
          value="three"
          label="Misc"
          {...a11yProps("three")}
          className={classes.style}
        />
        <Tab
          value="four"
          label="Billing"
          {...a11yProps("four")}
          className={classes.style}
        />
        <Tab
          value="five"
          label="Billing History"
          {...a11yProps("five")}
          className={classes.style}
        />
      </Tabs>

      <TabPanel value={value} index="one">
        <AccountSection />
      </TabPanel>
      <TabPanel value={value} index="two">
        <AmazonSetting />
      </TabPanel>
      <TabPanel value={value} index="three">
        <Misc />
      </TabPanel>
      <TabPanel value={value} index="four">
        <BillingSection />
      </TabPanel>
      <TabPanel value={value} index="five">
        <BillingHistory />
      </TabPanel>
    </div>
  );
}
