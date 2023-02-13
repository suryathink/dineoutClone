import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Navbar } from "./Navbar";
import RestaurentPage from "./RestaurentPage"
const HomePage = () => {
    
    const SearchValue = useRef();
    return <div id="container">
        <div id="searchbar">
            <h1 id="tophead"><span id="head">It's Now Safe To</span> <span id="crave">Crave!</span></h1>
            <div id="SearchDiv">
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfLXLVtEMiqg8UfD8XH2y9Yth31q6gSbX0hQ&usqp=CAU" alt="" id="searchlogo"/>
                <input ref={SearchValue} type="text" name="" id="inptag" placeholder="Search for Restaurants, Cuisines, Location..."/>
                <button type="Submit" id="searchbtn" onClick={() => {
                    console.log(SearchValue.current.value);
                    localStorage.setItem("Hotel",SearchValue.current.value)
                }}>Search</button>
            </div>
        </div>
        <div >
            <h2 id="bestoffer">Best offers</h2>
        </div>
        <div id="offerdiv">
            <div className="offerimage">
                <a href="">
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Nov/20/30offid.png?tr=tr:n-small" alt=""/>
                </a>
            </div>
            <div className="offerimage">
                 <a href="">
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small" alt="" />
                </a>
            </div>
            <div className="offerimage">
                 <a href="">
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/15offid.png?tr=tr:n-small" alt="" />
                </a>
            </div>
            <div className="offerimage">
                 <a href="">
                    <img src="https://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-small" alt="" />
                </a>
            </div>
        </div>
        <div>
              <h2 className="headingh2tag">Restaurants Near You</h2>
            </div>
        <div id="Nearresturant">
             <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
              <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/r/y/p48670-15414807385be1212212d20.jpg?tr=tr:n-large" alt="" />
              
                    <div id="content">
                    <div>
                         <h4 className="productdetail">Tamasha</h4>
                         <p className="productdetail">Central Delhi, Local-Scindia House</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
            </div>
            </Link>
              
            <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
                <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/6/y/t/p60213-16645391636336da1b89ad3.jpg?tr=tr:n-large" alt="" />
                
                    <div id="content">
                    <div>
                       <h4 className="productdetail">Ministry Of Beer</h4>
                       <p className="productdetail">Connaught Place </p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
             <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/h/z/p3728-15819343935e4a6739ada8d.jpg?tr=tr:n-large" alt="" />
                <div id="content">
                    <div>
                        <h4 className="productdetail">Unplugged Courtyard</h4>
                        <p className="productdetail">Connaught Place</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
            </div>
            </Link>
            <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
             <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/m/n/p13467-15646445765d4294e08b5cc.jpg?tr=tr:n-large" alt="" />
                <div id="content">
                    <div>
                        <h4 className="productdetail">My Bar Square</h4>
                         <p className="productdetail">Central Delhi</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
            </div>
                </Link>
            </div>
            <div>
                <h2 className="headingh2tag">Featured Restaurants</h2>
            </div>
            <div id="Featuredresturant">
                  </div>
        <div id="Nearresturant">
            <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
              <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/a/i/p11149-147565080057f4a4f01e14b.jpg?tr=tr:n-large" alt="" />
               
                    <div id="content">
                    <div>
                         <h4 className="productdetail">Station Bar</h4>
                    <p className="productdetail">F-Block</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
                </div>
            </Link>
             <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
             <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/w/p/p77260-1635484539617b837bb9a38.jpg?tr=tr:n-large" alt="" />
                
                     <div id="content">
                    <div>
                         <h4 className="productdetail">Cafe High 5</h4>
                    <p className="productdetail">Connaught Place</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
                </div>
                </Link>
             <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
                <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/4/e/g/p4037-15976644485f3a6cc0a4347.jpg?tr=tr:n-large" alt="" />
                
                     <div id="content">
                    <div>
                        <h4 className="productdetail">ABs - Absolute Barbecues</h4>
                    <p className="productdetail">Yeshwantpur,North Bangalore</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
                </div>
                </Link>
            <Link to="/soumya" style={{textDecoration:"none",color:"black"}}>
             <div className="resturantdiv">
                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/g/u/p15029-1446960293563edca542d82.jpg?tr=tr:n-large" alt="" />
                
                     <div id="content">
                    <div>
                        <h4 className="productdetail">ABs - Absolute Barbecues</h4>
                    <p className="productdetail">Marathahalli,East Bangalore</p>
                    </div>
                    <div>
                         <button className="rettingbtn">4.4</button>
                    </div>
                </div>
                </div>
                </Link>
            </div>
            <div>
            </div>
  </div>;
};

export default HomePage;