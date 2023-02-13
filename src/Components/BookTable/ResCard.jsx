import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  chakra,
  Flex,
  Image,
  Spinner,
  Badge,
  Stack,
  Icon,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
// import { BiRupee } from "react-icons/bi";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

import "./product.css";

import { FiShoppingCart } from "react-icons/fi";

const ToolTip = styled.i`
  font-size: 12px;
  cursor: pointer;
  color: #828282;
`;
const CartPlusIcon = styled.i`
  margin-right: 5px;
`;
const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #ff6f61;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #ff6f61;
  min-width: 80px;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #ff6f61;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #ff6f61;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #ff6f61;
  &:hover {
    background-color: #ff6f61;
    color: #fff;
  }
`;
const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;
// const sample = {
//   _id: "",
//   prodHighlights:""
//   longDesc:
//   imageUrl:
//   productName:,
//   shortDesc:,
//   ratings:,
//   numberOfRatings: ,
//   strikedPrice: ,
//   price: ,
//   discount:,
//   brand: ,
// };

const ResCard = ({
  prod: {
    resName,
    location,
    address,
    category,
    category2,
    category3,
    category4,
    price,
    rating,
    image,
    id,
  },
}) => {
  // dummy data
  // let resName = "Tamasha";
  // let location = "Connaught Place";
  // let address = "Scindia House,";

  // let category = "Continental";
  // let category2 = "Asian";
  // let category3 = "Italian";
  // let category4 = "North Indian";
  // let price = "₹ 2,000 for 2";

  let desc = location + address;
  let description =
    price +
    "," +
    category +
    "," +
    category2 +
    "," +
    category3 +
    "," +
    category4;

  // let rating = 4.5;
  // let image =
  //   "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/t/p27452-15020105505986dcb6d147f.jpg?tr=tr:n-medium";
  // let _id = 1;
  // dummy data

  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      h="400px"
      bg={"white"}
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
      position={"relative"}
      p={"10px"}
      // backgroundColor="transparent"
    >
      <Box
        width="100%"
        h="200px"
        margin="auto"
        bg={"white"}
        rounded={4}
        position={"relative"}
        className="productsImg"
      >
        <Link to={`/restaurent/${id}`} style={{ textDecoration: "none" }}>
          <Image src={image} />
        </Link>
      </Box>
      <Box
        p="10px 0px"
        fontSize="20px"
        fontWeight={"600"}
        lineHeight="20px"
        color={"#212121"}
        // textOverflow={"ellipsis"}
        textOverflow={"..."}
        overflow="hidden"
        mt="10px"
        textAlign={"left"}
        bg={"transparent"}
      >
        {resName}
      </Box>
      <Text
        fontSize="12px"
        fontWeight={"600"}
        lineHeight="17px"
        color={"#757575"}
        textAlign="left"
      >
        {desc}
      </Text>
      <Text
        fontSize="12px"
        fontWeight={"600"}
        lineHeight="17px"
        color={"#757575"}
        textAlign="left"
        bg={"transparent"}
      >
        {description}
      </Text>

      <Flex
        mt={"5px"}
        left="0"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        marginTop="14px"
        bg={"transparent"}
      >
        <Box
          paddingLeft={"5px"}
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
          borderRadius={"2px"}
          // bg={"#1aab2a"}
          bg={"#b3ca42"}
          color={"white"}
          fontWeight={"bold"}
          fontSize="12px"
          pr={"5px"}
        >
          {rating}{" "}
          <StarIcon marginTop={"-3px"} color={"white"} fontSize="10px" />
        </Box>
      </Flex>
      <Flex bg={"white"}>
        <Box bg={"white"}>
          <Text
            w="100px"
            h="20px"
            // bg="#fff4f4"
            color={"red.500"}
            fontWeight="400"
            borderRadius={"5px"}
            fontSize="12px"
            marginTop="14px"
            bg={"white"}
          >
            Dineout Pay
          </Text>
        </Box>
      </Flex>
      {/* <Flex
        mt={"5px"}
        paddingLeft={"2px"}
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
        borderRadius={"2px"}
        fontSize="14px"
        mb={"30px"}
        // border={"1px solid red"}
      >
        <Text
          fontSize="12px"
          fontWeight={"400"}
          lineHeight="17px"
          color={"#757575"}
        >
          MRP{" "}
          <Text as={"span"} textDecoration={"line-through"}>
            {" "}
            {price}
          </Text>
        </Text>
        <Text
          pl={"10px"}
          color="#5ac265"
          fontSize="12px"
          fontWeight={600}
          lineHeight="16px"
        >
          40% off
        </Text>
      </Flex> */}
      {/* <Box>
        <Flex
          position={"absolute"}
          bottom={1}
          left={0}
          right={0}
          marginLeft="10px"
          marginRight="10px"
          height={"40px"}
          // paddingBottom={"5px"}
          flexDirection={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderRadius={"2px"}
          fontWeight={"bold"}
          fontSize="14px"
        >
          <Flex justifyContent="flex-start" alignItems={"center"}>
            <BiRupee fontSize={"16px"} />

            <Text fontSize={"16px"}> {price}</Text>
          </Flex>
          <Tooltip
            label="Add to cart"
            bg="white"
            placement={"top"}
            color={"gray.800"}
            fontSize={"1.2em"}
          >
            <chakra.a display={"flex"}>
              <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
            </chakra.a>
          </Tooltip>
        </Flex>
      </Box> */}
    </Box>
  );
};

export default ResCard;
