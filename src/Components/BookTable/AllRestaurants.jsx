import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import ResCard from "./ResCard";
import Loading from "./Loading";

const AllRestautants = ({ restaurantArr }) => {
  const isLoading = useSelector((state) => state.restaurants.isLoading);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Grid
      gap={["10px", "10px", "20px", "20px", "20px"]}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
      ]}
      justifyContent="flex-end"
      bg="#f4f4f4"
    >
      {restaurantArr?.map((ele, i) => {
        if (ele.image != "") {
          return (
            <GridItem key={i}>
              <ResCard prod={ele} />
            </GridItem>
          );
        }
      })}
    </Grid>
  );
};

export default AllRestautants;
