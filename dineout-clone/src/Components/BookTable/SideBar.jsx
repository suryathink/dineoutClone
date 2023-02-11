import {
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Box,
  Accordion,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import style from "./Styles/SideBar.module.css";
function SideBar() {
  const handelChange = () => {
    alert("hhh");
  };
  return (
    <div className={style.sideDiv}>
      <Accordion allowMultiple>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Quick Filter
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* check box */}
                <Stack spacing={[1, 4]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    onChange={handelChange}
                  >
                    Dineout Pay
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Checkbox
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Checkbox
                  </Checkbox>
                </Stack>
                {/* check box */}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
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
                {/* check box */}
                <Stack spacing={[1, 4]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    onChange={handelChange}
                  >
                    North Indian
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Italian
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Chinese
                  </Checkbox>
                </Stack>
                {/* check box */}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Tags
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* check box */}
                <Stack spacing={[1, 4]} direction={["column"]}>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    onChange={handelChange}
                  >
                    Casual Dining
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Breakfast
                  </Checkbox>
                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Cafe
                  </Checkbox>

                  <Checkbox
                    size="md"
                    colorScheme="blue"
                    defaultChecked
                    onChange={handelChange}
                  >
                    Dinner
                  </Checkbox>
                </Stack>
                {/* check box */}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default SideBar;
