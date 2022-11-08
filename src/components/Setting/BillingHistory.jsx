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

export default function BillingHistory() {
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
          marginTop:"40px",
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
                  Date
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
                  Transaction ID
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
               
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                    textAlign:"center",
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
                <Box sx={{  textAlign:"center" }}>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                    
                      color: "#8B8FA3",
                    }}
                  >
                   Category
                  </Typography>
                  
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
                  Fee
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
               10/06/2022
                </Typography>
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
                  SV-252123
                </Typography>
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
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
              <Box sx={{ display: "flex", width: {xs:"70%", sm:"80%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
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
                <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Verified Review
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                 $.49
                </Typography>
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
               10/06/2022
                </Typography>
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
                  SV-252123
                </Typography>
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
                  118-986254-235656
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
              <Box sx={{ display: "flex", width: {xs:"70%", sm:"80%", md:"99%", lg:"99%", xl:"99%"}, margin: "auto" }}>
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
                <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                  Verified Review
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={2} xl={2}>
                <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "",
                  }}
                >
                 $.49
                </Typography>
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
