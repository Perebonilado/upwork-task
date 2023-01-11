import React, { FC } from "react";

import { Card, Typography, Stack, Box } from "@mui/material";

import { ImageInfoResponse } from "../types/ImagesInfo";
import { formatCardDate, generateRandomInteger } from "../utils/helpers";
import { ProductCardDateBgColors } from "../utils/constants";

const ProductCard: FC<ImageInfoResponse> = (props) => {
  const { date, month } = formatCardDate(props["Creative Brief Date"]);
  return (
    <Card sx={{ width: "240px", height: "280px", margin: "auto" }}>
      <Box sx={{ display: "flex", height: "55%", padding: 2 }}>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={props["Creative Lead Image"]}
          />
          <Typography
            color={"#fff"}
            align="center"
            fontSize={10}
            sx={{
              backgroundColor:
                ProductCardDateBgColors[
                  generateRandomInteger({ start: 0, stop: 2 })
                ],
              borderRadius: "20px",
              width: "80%",
            }}
          >
            {date} {month}
          </Typography>
        </Box>
        <Box sx={{ flex: "2", height: "100%" }}>
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src={props["Brand Image"]}
            alt="product"
          />
        </Box>
      </Box>
      <Box sx={{ height: "45%", backgroundColor: "#fafbfa", padding: 2 }}>
        <Stack spacing={1}>
          <Typography align="center" variant="h6" fontWeight={700}>
            {props.Client}
          </Typography>
          <Typography variant="body2" sx={{ color: "#859eb7" }}>
            {props["Job Description"]}
          </Typography>
          <Typography
            noWrap={true}
            variant="body1"
            sx={{ color: "#335e8a" }}
            fontWeight={600}
          >
            {props.Remarks}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
