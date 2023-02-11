import style from "./Styles/SortTable.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function SortTable() {
  return (
    <div className={style.sortdiv}>
      <div>
        <h1>Best Restaurants Near Me in Delhi</h1>
      </div>
      <div className={style.sortsection}>
        <div>
          <h3>Sort by</h3>
        </div>
        <div>
          <Menu >
            <MenuButton
              as={Button}
              w="220px"
              bg="white"
              h="30px"
              className={style.menubtn}
              rightIcon={<ChevronDownIcon />}
            >
              Price
            </MenuButton>
            <MenuList>
              <MenuItem>Low to High</MenuItem>
              <MenuItem>High to Low</MenuItem>
              
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}
export default SortTable;
