import React, { FC } from "react";

import { Grid } from "@mui/material";

import ProductCard from "./ProductCard";

import { ImageInfoResponse } from "../types/ImagesInfo";

interface Props {
  data: ImageInfoResponse[];
}

const ProductCardContainer: FC<Props> = ({ data }) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent={"center"}
      spacing={3}
      wrap="wrap"
      sx={{padding: 10}}
    >
      {data.map((item, index) => {
        return (
          <Grid key={index} item lg={4} justifyContent="center" alignItems={"center"} >
            <ProductCard {...item}  />;
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductCardContainer;
