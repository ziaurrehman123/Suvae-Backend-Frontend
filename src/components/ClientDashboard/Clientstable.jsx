import React from "react";
import {
  Typography,
  Box,
  TableHead,
  TableBody,
  Table,
  Button,
  TableCell,
  Grid,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@material-ui/core";
import SearchSection from "./SearchSection";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

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
const style = {
  position: "absolute",
  top: "50%",
  borderTop: "5px solid #7335FD",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

export default function ClientsTable() {
  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleConfirmButton =()=>{
    setOpen1(false);
    setOpen2(false);
  }

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
                      onClick={handleOpen1}
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
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                paddingBottom: "20px",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Box sx={{ textAlign: "right" }}>
                <CloseIcon
                  onClick={handleClose1}
                  style={{ cursor: "pointer" }}
                />
              </Box>

              <Typography
                id="modal-modal-title"
                sx={{
                  textAlign: "center",
                  marginTop: "-30px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Client Actions
              </Typography>
            </Box>
            <Box sx={{ width: "90%", margin: "auto" }}>
              <Divider />
              <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#8B8FA3",
                      }}
                    >
                      Name
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      Alex Preston
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#8B8FA3",
                      }}
                    >
                      Email
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      Preston5025@gmail.com
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "#8B8FA3",
                      }}
                    >
                      Phone
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "16px",
                        color: "black",
                      }}
                    >
                      813-992-0484
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ marginTop: "30px", marginBottom: "10px" }}>
                <Box sx={{marginBottom:"20px"}}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Balance (0.00)
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: "center" }}>
                    <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#7335FD",
                          paddingLeft: "40px",
                          fontSize:"15px",
                          fontWeight:"600",
                          paddingRight: "40px",
                          textTransform: "capitalize",
                        }}
                        onClick={handleOpen1}
                      >
                        Manage
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
                </Box>
                <Box sx={{marginBottom:"20px"}}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Balance (0.00)
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#7335FD",
                          paddingLeft: "40px",
                          fontSize:"15px",
                          fontWeight:"600",
                          paddingRight: "40px",
                          textTransform: "capitalize",
                        }}
                        onClick={handleOpen1}
                      >
                        Manage
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
                </Box>
                <Box sx={{marginBottom:"20px"}}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Balance (0.00)
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#7335FD",
                          paddingLeft: "40px",
                          fontSize:"15px",
                          fontWeight:"600",
                          paddingRight: "40px",
                          textTransform: "capitalize",
                        }}
                        onClick={handleOpen1}
                      >
                        Manage
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
                </Box>
                <Box sx={{marginBottom:"20px"}}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "17px",
                        color: "black",
                        fontWeight: "600",
                      }}
                    >
                      Balance (0.00)
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: "center" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FF0000",
                          paddingLeft: "40px",
                          fontSize:"15px",
                          fontWeight:"600",
                          paddingRight: "40px",
                          textTransform: "capitalize",
                        }}
                        onClick={handleOpen1}
                      >
                        Send
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
                </Box>
                
                <Box sx={{ marginTop: "40px", marginBottom:"20px" }}>
                  <Grid container spacing={0}>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#FF0000",
                          color: "white",
                          textTransform: "capitalize",
                          fontWeight: "600",
                        }}
                        onClick={handleOpen2}
                      >
                        Delete Account
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: "right" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#7335FD",
                            textTransform: "capitalize",
                            border: "1px solid #7335FD",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            fontWeight: "600",
                          }}
                        >
                          Close
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              paddingBottom: "20px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <CloseIcon onClick={handleClose2} style={{ cursor: "pointer" }} />
            </Box>

            <Typography
              id="modal-modal-title"
              sx={{
                textAlign: "center",
                marginTop: "-30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Delete Account?
            </Typography>
          </Box>
          <Divider />
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "20px",
              fontSize: "20px",
            }}
          >
            This will delete all data associated with this Client. 
          </Typography>
          <Box sx={{width:"90%", margin:"auto", paddingBottom:"30px"}}>
          <Box sx={{textAlign:"center", marginTop:"10px"}}>
          <Button variant="outlined" sx={{ color:"#7335FD", textTransform:"capitalize", border:"1px solid #7335FD", margin:"10px"}}>Cancel</Button>
          <Button variant="contained" sx={{backgroundColor:"#7335FD", color:"white", textTransform:"capitalize", margin:"10px", fontWeight:"600"}} onClick={handleConfirmButton}>Confirm</Button>
          </Box>
          </Box>
        </Box>
      </Modal>
      </Box>
    </>
  );
}
