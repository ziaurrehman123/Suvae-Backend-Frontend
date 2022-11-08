import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import productImage from "../../assets/images/productImage.png";
import lock from "../../assets/images/lock.png";
import TablePagination from "@mui/material/TablePagination";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

export default function ProductsTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [value, setValue] = React.useState(2);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          paddingTop: "20px",
          borderRadius: "20px",
          paddingBottom: "20px",
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
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
                  onClick={handleClose}
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
                Comment
              </Typography>
            </Box>
            <Divider />
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "20px",
                paddingBottom: "50px",
                fontSize: "20px",
              }}
            >
              Great product, wish it was smaller
            </Typography>
          </Box>
        </Modal>
        <Box sx={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "#F6F7F8",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "3px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#8B8FA3",
                  }}
                >
                  Order ID
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#8B8FA3",
                  }}
                >
                  Product
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex", width: {xs:"50%", sm:"50%", md:"70%", lg:"70%", xl:"70%"}, margin: "auto" }}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",

                      color: "#8B8FA3",
                    }}
                  >
                    Customer Rating
                  </Typography>
                  <Box>
                    <Tooltip
                      title="Feedback from Form Submission"
                      placement="top-start"
                    >
                      <InfoIcon
                        sx={{
                          color: "#7335FD",
                          marginLeft: "10px",
                          marginTop: "0px",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#8B8FA3",
                  }}
                >
                  Submission Date
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex",  width: {xs:"50%", sm:"50%", md:"70%", lg:"70%", xl:"70%"}, margin: "auto" }}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      marginLeft: "20px",
                      color: "#8B8FA3",
                    }}
                  >
                    Customer Info
                  </Typography>
                  <Box>
                    <Tooltip
                      title="Name and Email address of your customer"
                      placement="top-start"
                    >
                      <InfoIcon
                        sx={{
                          color: "#7335FD",
                          marginLeft: "10px",
                          marginTop: "0px",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#8B8FA3",
                  }}
                >
                  Review Status
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "3px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex", width:{xs:"73%", sm:"90%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                    alt="Your logo."
                    src={productImage}
                  />
                  <Box>
                    <Typography>
                      Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                    <Typography sx={{ color: "#646464" }}>
                      SKU: GlobeUSA2
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ width: {xs:"47%", sm:"50%", md:"66%", lg:"66%", xl:"66%"}, margin: "auto" }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                    onClick={handleOpen}
                  >
                    View Comment
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Sep 10, 2022
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip title="Enable in Billing" placement="top-start">
                    <Box
                      component="img"
                      sx={{
                        height: "60px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={lock}
                    />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "#FDA700",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  >
                    Pending
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            height: "1px",
            backgroundColor: "#DDE1E9",
            marginTop: "15px",
            margin: "auto",
          }}
        ></Box>
         <Box sx={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "3px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex", width:{xs:"73%", sm:"90%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                    alt="Your logo."
                    src={productImage}
                  />
                  <Box>
                    <Typography>
                      Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                    <Typography sx={{ color: "#646464" }}>
                      SKU: GlobeUSA2
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ width: {xs:"47%", sm:"50%", md:"66%", lg:"66%", xl:"66%"}, margin: "auto" }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                    onClick={handleOpen}
                  >
                    View Comment
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Sep 10, 2022
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip title="Enable in Billing" placement="top-start">
                    <Box
                      component="img"
                      sx={{
                        height: "60px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={lock}
                    />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "#FDA700",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  >
                    Pending
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            height: "1px",
            backgroundColor: "#DDE1E9",
            marginTop: "15px",
            margin: "auto",
          }}
        ></Box>
    <Box sx={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "3px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex", width:{xs:"73%", sm:"90%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                    alt="Your logo."
                    src={productImage}
                  />
                  <Box>
                    <Typography>
                      Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                    <Typography sx={{ color: "#646464" }}>
                      SKU: GlobeUSA2
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ width: {xs:"47%", sm:"50%", md:"66%", lg:"66%", xl:"66%"}, margin: "auto" }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                    onClick={handleOpen}
                  >
                    View Comment
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Sep 10, 2022
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip title="Enable in Billing" placement="top-start">
                    <Box
                      component="img"
                      sx={{
                        height: "60px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={lock}
                    />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "#FDA700",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  >
                    Pending
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            height: "1px",
            backgroundColor: "#DDE1E9",
            marginTop: "15px",
            margin: "auto",
          }}
        ></Box>
     <Box sx={{ width: "95%", margin: "auto", paddingTop: "20px" }}>
          <Box
            sx={{
              backgroundColor: "",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderRadius: "3px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ display: "flex", width:{xs:"73%", sm:"90%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
                  <Box
                    component="img"
                    sx={{
                      height: "50px",
                      width: "50px",
                      marginRight: "10px",
                    }}
                    alt="Your logo."
                    src={productImage}
                  />
                  <Box>
                    <Typography>
                      Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                    <Typography sx={{ color: "#646464" }}>
                      SKU: GlobeUSA2
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ width: {xs:"47%", sm:"50%", md:"66%", lg:"66%", xl:"66%"}, margin: "auto" }}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    size="large"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    }}
                    onClick={handleOpen}
                  >
                    View Comment
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Sep 10, 2022
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                  <Tooltip title="Enable in Billing" placement="top-start">
                    <Box
                      component="img"
                      sx={{
                        height: "60px",
                        width: "40px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={lock}
                    />
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "#7335FD",
                      borderRadius: "10px",
                      marginTop: "10px",
                      textTransform: "capitalize",
                      paddingLeft: "35px",
                      paddingRight: "35px",
                    }}
                  >
                    Verified
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            width: "95%",
            height: "1px",
            backgroundColor: "#DDE1E9",
            marginTop: "15px",
            margin: "auto",
          }}
        ></Box>

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
      </Box>
    </>
  );
}
