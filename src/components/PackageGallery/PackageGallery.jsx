import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
    backgroundColor: "#D6DAE1",
    height: "1px",
  },
  packageGalleryHeading: {
    fontWeight: "600",
    marginTop: "40px",
    fontSize: "36px",
  },
  packageGallerySubHeading: {
    fontWeight: "600",
    marginTop: "40px",
    fontSize: "36px",
    textAlign: "center",
  },
  subHeadingBorder: {
    height: "2px",
    width: "23%",
    margin: "auto",
    backgroundColor: "grey",
  },
  mainBox: {
    border: "1px solid black",

  },
  buttonBox: {
    textAlign: "center",
    marginTop: "30px",
  },
}));

export default function PackageGallery() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography component="div">
          <Box className={classes.packageGalleryHeading}>Package Inserts</Box>
        </Typography>
        <Box className={classes.divider}></Box>
        <Box>
          <Typography component="div">
            <Box className={classes.packageGallerySubHeading}>
              Insert Requirements
            </Box>
          </Typography>
          <Box className={classes.subHeadingBorder}></Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{ marginTop: "40px" }}>
                  <Box className={classes.mainBox}>
                    <Box sx={{ padding: "20px" }}>
                      <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
                        Engage Your Customer
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "500",
                          marginTop: "10px",
                        }}
                      >
                        Create an incentive that intrigues your customer to
                        access our form.
                      </Typography>
                      <Box>
                        <ul>
                          <li
                            style={{ marginBottom: "10px", fontSize: "17px" }}
                          >
                            Incentive’s are provided to your customer in the
                            form of a Promo Code paired with a Link to where the
                            offer can be redeemed.
                          </li>
                          <li
                            style={{ marginBottom: "10px", fontSize: "17px" }}
                          >
                            Link leads to a storefront or product page on
                            Amazon, Shopify, or other website.
                          </li>
                        </ul>
                      </Box>
                      <Box className={classes.buttonBox}>
                        <Button
                          variant="outlined"
                          sx={{
                            border: "1px solid rgba(115, 53, 253, 0.5)",
                            color: "#7335FD",
                            fontWeight: "600",
                          }}
                        >
                          I Understand
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Box sx={{ marginTop: "40px" }}>
                  <Box className={classes.mainBox}>
                    <Box sx={{ padding: "20px" }}>
                      <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
                        EasyRebate.co
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "500",
                          marginTop: "10px",
                        }}
                      >
                        Include a QR Code or URL on your package inserts using the link above to direct your customer's to our form.
                      </Typography>
                      <Box>
                        <ul>
                          <li
                            style={{ marginBottom: "10px", fontSize: "17px" }}
                          >
                            Form submissions are viewable from your dashboard.
                          </li>

                        </ul>
                      </Box>
                      <Box className={classes.buttonBox} sx={{ marginTop: "45px" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            border: "1px solid rgba(115, 53, 253, 0.5)",
                            color: "#7335FD",
                            fontWeight: "600",
                          }}
                        >
                          I Understand
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}
