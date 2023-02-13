import {
  Box,
  Flex,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Button,
  Checkbox,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  MinusIcon,
  AddIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { appThunkActionCreator } from "../../Redux/AppReducer/action";
import AllRestautants from "../../Components/BookTable/AllRestaurants";

function BookTable() {
  const dispatch = useDispatch();
  const url = "http://localhost:3000/restaurants";
  const restaurantArr = useSelector((store) => store.restaurants.restaurants);

  const [categoryState, setCategoryState] = useState({
    category: {
      Italian: false,
      Chinese: false,
      Beverages: false,
      Desserts: false,
    },
    location: {
      Sarojini: false,
      South: false,
      West: false,
    },
    sort: "",
  });

  const returnFilteredData = () => {
    console.log("inputstate", categoryState);
    let filteredProd = restaurantArr
      .filter((ele) => {
        let allEmpty = true;
        for (let k in categoryState.category) {
          if (categoryState.category[k]) {
            allEmpty = false;
          }
        }
        if (allEmpty) return true;

        for (let k in categoryState.category) {
          if (categoryState.category[k] && ele.category2 == k) {
            return true;
          }
        }
      })
      .filter((ele) => {
        let allEmpty = true;
        for (let k in categoryState.location) {
          if (categoryState.location[k]) {
            allEmpty = false;
          }
        }
        if (allEmpty) return true;

        for (let k in categoryState.location) {
          if (categoryState.location[k] && ele.location.includes(k)) {
            return true;
          }
        }
      })
      .sort((a, b) => {
        if (categoryState.sort == "asc") {
          return a.rating - b.rating;
        } else if (categoryState.sort == "desc") {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      });

    return filteredProd;
  };
  const handleSorting = (e) => {
    setCategoryState({
      ...categoryState,
      sort: e.target.value,
    });
  };
  const handleCategory = (e) => {
    setCategoryState({
      ...categoryState,
      category: {
        ...categoryState.category,
        [e.target.name]: e.target.checked,
      },
    });
  };
  const handleLocation = (e) => {
    setCategoryState({
      ...categoryState,
      location: {
        ...categoryState.location,
        [e.target.name]: e.target.checked,
      },
    });
  };

  useEffect(() => {
    dispatch(appThunkActionCreator(url));
  }, []);
  return (
    <Box
      borderTop="1px solid"
      borderColor="gray.300"
      py="2.5rem"
      fontSize="0.875rem"
      bg={"#f4f4f4"}
    >
      <Box
        maxW="85rem"
        marginX="auto"
        pb="1rem"
        mb="1.5rem"
        px={{ base: "1rem", lg: "0.5rem" }}
        borderBottom="1px solid"
        borderColor="gray.300"
      >
        <Flex
          justify="space-between"
          flexWrap="wrap"
          alignItems="start"
          gap={"10px"}
        >
          <Box
            w={{ base: "100%", lg: 1 / 5 }}
            mb={{ base: "1.5rem", lg: "0" }}
            bg="white"
          >
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton fontWeight="semibold">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize={"20px"}
                        >
                          Location
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" fontWeight="semibold" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack spacing={2} direction="column">
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="Sarojini"
                          onChange={handleLocation}
                        >
                          Sarojini Nagar
                        </Checkbox>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="West"
                          onChange={handleLocation}
                        >
                          West Delhi
                        </Checkbox>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="South"
                          onChange={handleLocation}
                        >
                          South Delhi
                        </Checkbox>
                      </Stack>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize={"20px"}
                          fontWeight="semibold"
                        >
                          Cuisines
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Stack spacing={2} direction="column">
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="Italian"
                          onChange={handleCategory}
                        >
                          Italian
                        </Checkbox>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="Chinese"
                          onChange={handleCategory}
                        >
                          Chinese
                        </Checkbox>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="Beverages"
                          onChange={handleCategory}
                        >
                          Beverages
                        </Checkbox>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          name="Desserts"
                          onChange={handleCategory}
                        >
                          Desserts
                        </Checkbox>
                      </Stack>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            {/* Addodion */}
          </Box>
          <Box
            w={{ base: "100%", lg: 3.9 / 5 }}
            mb={{ base: "1.5rem", lg: "0" }}
            // bg="green.200"
          >
            <Breadcrumb
              color={"gray.500"}
              fontWeight="500"
              spacing="6px"
              separator={<ChevronRightIcon color="gray.400" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dineout</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/restaurants">Restaurants</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex
              justify="space-between"
              flexWrap="wrap"
              alignItems="end"
              marginBottom="20px"
              marginTop="20px"
            >
              <Text fontSize="26px" fontWeight="600" bg="transparent">
                Best Restaurants Near Me
              </Text>

              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  w="225px"
                  textAlign="left"
                  borderRadius="0px"
                  fontSize="20px"
                  bg="white"
                >
                  Sort By
                </MenuButton>
                <MenuList borderRadius="0px" fontSize="20px" bg="white">
                  <MenuItem value="desc" onClick={handleSorting} bg="white">
                    Rating: High to Low
                  </MenuItem>
                  <MenuItem value="asc" onClick={handleSorting} bg="white">
                    Rating: Low to High
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            {/* {console.log("resarr", restaurantArr)} */}
            <AllRestautants restaurantArr={returnFilteredData()} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
export default BookTable;
