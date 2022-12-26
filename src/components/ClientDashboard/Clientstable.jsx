import React from "react";
import {
  Typography,
  Box,
  TableHead,
  TableBody,
  Table,
  Button,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@material-ui/core";
import SearchSection from "./SearchSection";

//styling
const useStyles = makeStyles((theme) => ({
  tableInnerContent: {
    padding: "10px 40px 40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    marginTop: "40px",
  },
  infoiconStyle: {
    color: "#8B8FA3",
    marginLeft: "20px",
    marginTop: "0px",
    "&:hover": {
      color: "#7335FD",
    },
  },
  tableheadingRow: {
    backgroundColor: "#F6F7F8",
  },
  tableCellheading: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
    color: "#8B8FA3",
  },
  tableCellContent: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
  },
  productContent: {
    display: "flex",
    width: "99%",
    [theme.breakpoints.down("sm")]: {
      width: "73%",
    },
    margin: "auto",
  },
  productImage: {
    height: "50px",
    width: "50px",
    marginRight: "10px",
  },
}));

export default function ClientsTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box>
        <TableContainer
          component={Paper}
          className={classes.tableInnerContent}
          sx={{
            width: "95%",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <SearchSection />
          <Box sx={{ marginBottom: "20px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "18px" }}>
              Clients:1
            </Typography>
          </Box>
          <Table aria-label="simple table" sx={{ overflowX: "hidden" }}>
            <TableHead className={classes.tableheadingRow}>
              <TableRow>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Client ID
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Products
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography className={classes.tableCellheading}>
                      Products Active
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Form Submissions
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Reviews Collected
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography className={classes.tableCellheading}>
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    SC4021
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography className={classes.tableCellContent}>
                    5
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography className={classes.tableCellContent}>
                    3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography className={classes.tableCellContent}>
                      200
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography className={classes.tableCellContent}>
                    70
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#7335FD",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ width: "97%", margin: "auto", paddingTop: "20px" }}>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </TableContainer>
      </Box>
    </>
  );
}
