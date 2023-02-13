import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export const Navbar = () => {
  return (
    <div id="nav_div">
      <div id="imgdiv">
        <img
          src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
          alt=""
        />
      </div>
      <div id="h4div">
        <Link to="/" className="h4link">
          <h4 className="navh4">Home</h4>
        </Link>
        <Link to="/book" className="h4link">
          <h4 className="navh4">Book a Table</h4>
        </Link>

        <Link to="/dineoutPay" className="h4link">
          <h4 className="navh4">Dineout Pay</h4>
        </Link>
        <Link to="/events" className="h4link">
          <h4 className="navh4">Events</h4>
        </Link>
        <Link to="/restaurent" className="h4link">
          <h4 className="navh4">Blog</h4>
        </Link>
      </div>
      <div id="login">
        <Link to="/login">
          <button id="navbtn">Login</button>
        </Link>
      </div>
    </div>
  );
};
