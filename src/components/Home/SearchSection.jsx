import React from "react";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "88%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    border: "none",
    padding: "3px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
  searchIcon: {
    fontSize: "30px",
  },
  searchBox: {
    paddingTop: 10,
    boxShadow: 2,
    marginBottom: 20,
    paddingBottom: 5,
    borderRadius: 10,
  },
  
}));

export default function SearchSection() {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          paddingTop: "20px",
          paddingBottom: "1px",
        }}
      >
        <Box sx={{width:{xs:"100%", sm:"70%", md:"70%", lg:"40%", xl:"40%"}}}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: 3,
            }}
            className={classes.searchBox}
          >
            <TextField
              className={classes.searchInput}
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Search all"
            />
            <SearchIcon
              sx={{ fontSize: 45, marginLeft: {xs:"32px", sm:"69px", md:"20px", lg:"12px", xl:"16px"}, color: "#7335FD" }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
