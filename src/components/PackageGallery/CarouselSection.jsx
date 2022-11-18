import React from "react";
import { Typography, Box } from "@mui/material";
import "react-stacked-carousel/dist/index.css";
import CardExample from "./NewCarousel";
import StickerCarousel from "./StickersCarousel";

export default function CarouselSection() {

  return (
    <>
      <Box sx={{ marginBottom: "60px", marginTop: "60px" }}>
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Use the examples below as inspiration to create your package insert.
        </Typography>
        <Box sx={{ marginBottom: "40px" }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Card Inserts
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Business Card | 3.5” x 2”
          </Typography>
        </Box>
        <Box sx={{ width: "80%", margin: "auto" }}>
        <CardExample />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Typography
            sx={{
              fontSize: "50px",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Stickers
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            1:1
          </Typography>
        </Box>
        <Box sx={{ width: "80%", margin: "auto" }}> <StickerCarousel /></Box>
       
      </Box>
    </>
  );
}
