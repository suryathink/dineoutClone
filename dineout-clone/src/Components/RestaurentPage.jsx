import React from "react";
import "./RestaurentPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const RestaurentPage = () => {
  const [time_ct, settime_ct] = useState(0);
  const arr = {
    "no-img src":
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/a/j/p20996-145631488756cd9a0796608.jpg?tr=tr:n-medium",
    "restnt-rating": 4.2,
    "restnt-name": "Tamasha",
    "restnt-name href":
      "https://www.dineout.co.in/delhi/tamasha-connaught-place-central-delhi-20996",
    "restnt-loc 2": "Connaught Place",
    "restnt-loc href":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi/connaught-place",
    "restnt-loc 3": "Central Delhi",
    "restnt-loc href 2":
      "https://www.dineout.co.in/delhi-restaurants/central-delhi",
    "double-line-ellipsis": "₹ 2,000 for 2 (approx)",
    "double-line-ellipsis 3": "Continental",
    "double-line-ellipsis href":
      "https://www.dineout.co.in/delhi-restaurants/continental-cuisine",
    "double-line-ellipsis 4": ",",
    "double-line-ellipsis 5": "Asian",
    "double-line-ellipsis href 2":
      "https://www.dineout.co.in/delhi-restaurants/asian-cuisine",
    "double-line-ellipsis 6": ",",
    "double-line-ellipsis 7": "Italian",
    "double-line-ellipsis href 3":
      "https://www.dineout.co.in/delhi-restaurants/italian-cuisine",
    "double-line-ellipsis 8": ",",
    "double-line-ellipsis 9": "North Indian",
    "double-line-ellipsis href 4":
      "https://www.dineout.co.in/delhi-restaurants/north-indian-cuisine",
    btn: "Dineout Pay",
    "btn href":
      "https://www.dineout.co.in/dineout-pay/instant-discount/how-it-works",
    "restnt-loc 4": "",
    "restnt-loc href 3": "",
  };
  console.log(time_ct);
  return (
    <div className="restaurent_container">
      <div className="restaurent_main">
        <p className="restaurent_header">
          Dineout &nbsp;&nbsp;{">"}
          &nbsp;&nbsp;Delhi&nbsp;&nbsp;{">"}
          &nbsp;&nbsp;{arr["restnt-loc 3"]}&nbsp;&nbsp;
          {">"}&nbsp;&nbsp;{arr["restnt-loc 2"]}
          &nbsp;&nbsp;{">"}
          &nbsp;&nbsp;{arr["restnt-name"]}
        </p>
        <div className="restnt-top1">
          <img
            src={arr["no-img src"]}
            alt="img"
            className="restaurent_img"
          ></img>
          <div className="restnt_name_rating">
            <h1 className="restnt_name">{arr["restnt-name"]}</h1>
            <button>{arr["restnt-rating"]}</button>
          </div>
          <Link to="" className="restnt_dtls_link">
            <p className="restnt_dtls">
              {arr["double-line-ellipsis"]} | {arr["double-line-ellipsis 9"]}
              {arr["double-line-ellipsis 7"]}, {arr["double-line-ellipsis 5"]}
              <br />
              {arr["restnt-loc 2"]} | Delhi | <span>Get Direction</span>
              <br />
            </p>
          </Link>
          <p className="restnt_dtls">
            Time: 11:30 Am to 10:30 PM <span>(Open Now)</span>
            <temp
              onClick={() => {
                settime_ct(time_ct + 1);
              }}
            >
              &nbsp;&nbsp; ﹀
            </temp>
            {time_ct % 2 === 0 ? (
              <div className="restnt_time">
                <p>
                  Sunday11:30 Am to 10:30 PM <br />
                  Monday11:30 Am to 10:30 PM
                  <br />
                  Tuesday11:30 Am to 10:30 PM <br />
                  Wednesday11:30 Am to 10:30 PM <br />
                  Thursday11:30 Am to 10:30 PM <br />
                  Friday11:30 Am to 10:30 PM <br />
                  Saturday11:30 Am to 10:30 PM
                </p>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        <div className="restnt-top2">
          <button>Overview</button>
          <button>Menu</button>
          <button>About</button>
          <button>Help</button>
        </div>
        <div className="restnt-top3">
          <img
            src="https://im1.dineout.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?tr=tr:n-medium"
            alt="img2"
          ></img>
          <p>
            Combine any offer with Dineout Pay to save up to 5% more on your
            bill
          </p>
        </div>
      </div>
      <div className="calender">calender</div>
    </div>
  );
};

export default RestaurentPage;
