import React, { FC, useState, useEffect } from "react";
import { Button, Container, Box, Typography } from "@mui/material";

import CardFilter from "../components/CardFilter";
import { useUploadPictureDataMutation } from "../config/features/api";
import ProductCardContainer from "../components/ProductCardContainer";
import { getUniqueAccMgtLead } from "../utils/helpers";
import { ImageInfoResponse } from "../types/ImagesInfo";

const Home: FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadFile, { data, isSuccess }] = useUploadPictureDataMutation();
  const [uniqueMgtLeadArr, setUniqueMgtLeadArr] =
    useState<{ title: string; isActive: boolean }[]>();
  const [filterKey, setFilterKey] = useState<string>("");
  const [filteredData, setFilteredData] = useState<ImageInfoResponse[]>();

  useEffect(() => {
    if (file) {
      uploadFile({ body: { file: file } });
    }
  }, [file]);

  useEffect(() => {
    if (data) {
      const arr = getUniqueAccMgtLead(data);
      setUniqueMgtLeadArr(arr);
    }
  }, [data]);

  useEffect(() => {
    if (data) setFilteredData(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((item) =>
        item["Account Management Lead"].includes(filterKey)
      );
      setFilteredData(filtered);
      const mutatedUniqueMgtArr = uniqueMgtLeadArr?.map((item) =>
        item.title === filterKey
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
      if (mutatedUniqueMgtArr) setUniqueMgtLeadArr(mutatedUniqueMgtArr);
      if (filterKey === "" && mutatedUniqueMgtArr)
        setUniqueMgtLeadArr(
          mutatedUniqueMgtArr.map((item) =>
            item.title === "All"
              ? { ...item, isActive: true }
              : { ...item, isActive: false }
          )
        );
    }
  }, [filterKey]);

  return (
    <Container maxWidth="lg">
      {!data ? (
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" component="label">
            Upload
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
            />
          </Button>
        </Box>
      ) : (
        <>
          {uniqueMgtLeadArr && (
            <CardFilter
              setFilterKey={setFilterKey}
              data={uniqueMgtLeadArr}
            />
          )}
          {filteredData && <ProductCardContainer data={filteredData} />}
        </>
      )}
    </Container>
  );
};

export default Home;
