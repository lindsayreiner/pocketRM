import React, { useState, useEffect } from "react";
// import { GET_ALL_BIRTHDAYS, GET_ALL_ANNIVERSARIES, GET_ALL_REMINDERS, GET_ALL_IMPORTANT } from '../utils/queries.js'
import "../styles/Dashboard.css"
//edit

import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Login from "./Login";
import auth from "../utils/auth";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const redirect = async () => {
      try {
        const expired = auth.loggedIn();

        if (!expired) {
          return false;
        }

        setIsLoggedIn(expired);
      } catch (err) {
        console.error(err);
      }
    };

    redirect();
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return (
      <>
        <section
          className="dashboardCont"
          data-aos="fade-up"
          data-aos-delay="10"
        >
          <Contacts />

          <div className="upcomingCont">
            <h1 className="upcomingMain">Upcoming</h1>
            <div className="reminderCont">
              <div id="birthdays" className="wrapper ">
                <p className="upcomingTitle pink">Birthdays</p>
                <div id="birthdays" className="upcomingDiv">
                  <ul className="upcomingUl">
                    <li className="upcomingLi">
                      <b>
                        <Link className="profileLink" to="/profile:id">
                          Melanie's
                        </Link>{" "}
                        Birthday:
                      </b>{" "}
                      January 6
                    </li>
                    <li className="upcomingLi">
                      <b>Dad's Birthday:</b> February 24
                    </li>
                    <li className="upcomingLi">
                      <b>Liz's child Birthday:</b> April 1
                    </li>
                    <li className="upcomingLi">
                      <b>Kaley's partner birthday:</b> April 4
                    </li>
                  </ul>
                </div>
              </div>

              <div className="wrapper">
                <p className="upcomingTitle green">Anniversaries</p>
                <div id="anniversaries" className="upcomingDiv">
                  <ul className="upcomingUl">
                    <li className="upcomingLi">
                      <b>
                        <Link className="profileLink" to="/profile:id">
                          Melanie
                        </Link>{" "}
                        and Mike's Anniversary:
                      </b>{" "}
                      January 6
                    </li>
                    <li className="upcomingLi">
                      <b>Dad and Dena Anniversary:</b> February 24
                    </li>
                    <li className="upcomingLi">
                      <b>Liz and Sam Anniversary:</b> April 1
                    </li>
                    {/* <li className="upcomingLi"><b>Kaley and Justin Anniversary:</b> April 4</li> */}
                  </ul>
                </div>
              </div>

              <div className="wrapper">
                <p className="upcomingTitle orange">Important Dates</p>
                <div id="importantDates" className="upcomingDiv">
                  <ul className="upcomingUl">
                    <li className="upcomingLi">
                      <b>
                        <Link className="profileLink" to="/profile:id">
                          Melanie's
                        </Link>{" "}
                        Birthday:
                      </b>{" "}
                      January 6
                    </li>
                    <li className="upcomingLi">
                      <b>Dad's Birthday:</b> February 24
                    </li>
                    <li className="upcomingLi">
                      <b>Liz's child Birthday:</b> April 1
                    </li>
                    <li className="upcomingLi">
                      <b>Kaley's partner birthday:</b> April 4
                    </li>
                  </ul>
                </div>
              </div>

              <div className="wrapper">
                <p className="upcomingTitle blue">Reminders</p>
                <div id="reminders" className="upcomingDiv">
                  <ul className="upcomingUl">
                    <li className="upcomingLi">
                      <b>
                        <Link className="profileLink" to="/profile:id">
                          Melanie
                        </Link>
                        :
                      </b>{" "}
                      January 6
                    </li>
                    <li className="upcomingLi">
                      <b>Dad's Birthday:</b> February 24
                    </li>
                    <li className="upcomingLi">
                      <b>Liz's Birthday:</b> April 1
                    </li>
                    <li className="upcomingLi">
                      <b>Kaley's Birthday:</b> April 4
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <Login />;
}
