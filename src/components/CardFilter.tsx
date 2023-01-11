import React, { FC } from "react";

import { ButtonGroup, Button, Box,useMediaQuery } from "@mui/material";

interface ButtonTitle {
  title: string;
  isActive: boolean;
}

interface Props {
  data: ButtonTitle[];
  setFilterKey: React.Dispatch<React.SetStateAction<string>>;
}

const CardFilter: FC<Props> = ({ data, setFilterKey }) => {
  
  const matches = useMediaQuery('(max-width:750px)');

  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}>
      <ButtonGroup orientation={matches ? "vertical" : "horizontal"}>
        {data.map((item, idx) => (
          <Button
            disableElevation
            variant={item.isActive ? "contained" : "outlined"}
            key={idx}
            onClick={() => {
              if (item.title !== "All") {
                setFilterKey(item.title);
              } else {
                setFilterKey("");
                setFilterKey("");
              }
            }}
          >
            {item.title}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default CardFilter;
