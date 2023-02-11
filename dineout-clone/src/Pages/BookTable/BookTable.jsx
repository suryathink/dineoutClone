import style from "./Styles/BookTable.module.css";
import Path from "../../Components/BookTable/Path";
import SideBar from "../../Components/BookTable/SideBar";

import SortTable from "../../Components/BookTable/SortTable";
import AllCards from "../../Components/BookTable/AllCards";


function BookTable() {
  return (
    <div className={style.main}>
      <div className={style.maincontainer}>
        <div>
          <SideBar />
        </div>
        <div>
          {" "}
          <Path />
          <SortTable /> 
          <AllCards/>
         
        </div>
      </div>
    </div>
  );
}
export default BookTable;
