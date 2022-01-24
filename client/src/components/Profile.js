import React from "react";
import "../styles/Profile.css";
// import { Link } from "react-router-dom";
// import { GET_SINGLE_CONTACT } from '../utils/queries.js'
import Contacts from "./Contacts";
import Reminders from "./Reminders";
import Notes from "./Notes";

import ProfileEdit from "./Modals/ProfileEdit";



export default function Profile() {
  return (
    <>
      <section className="profileCont">
        <Contacts />

        <div className="profile">

          <div className="nameEditWrapper">
            <h1 className="connectionName">
              Lindsay Reiner
            </h1>
            {<ProfileEdit />}
          </div>


          <div className="cardsCont">
            <div className="wrapper">
              <p className="upcomingTitle orange">Main</p>
              <div id="mainProfile" className="upcomingDiv">
                <ul className="upcomingUl">
                  <li className="upcomingLi">Relationship: </li>
                  <li className="upcomingLi">Met at: </li>
                  <li className="upcomingLi">Phone: </li>
                  <li className="upcomingLi">Email: </li>
                  <li className="upcomingLi">Address: </li>
                </ul>
              </div>
            </div>

            <div className="wrapper">
              <p className="upcomingTitle blue">Personal</p>
              <div id="personalProfile" className="upcomingDiv">
                <ul className="upcomingUl">
                  <li className="upcomingLi">Birthday: </li>
                  <li className="upcomingLi">Hometown: </li>
                  <li className="upcomingLi">Partner: </li>
                  <li className="upcomingLi">Children: </li>
                  <li className="upcomingLi">Pet Name(s): </li>
                  <li className="upcomingLi">Occupation: </li>
                  <li className="upcomingLi">Hometown: </li>
                  <li className="upcomingLi">Partner: </li>
                  <li className="upcomingLi">Children: </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="cardWrapperBottom">
            <div className="wrapper">
              <p className="upcomingTitle pink">General</p>
              <div id="generalProfile" className="upcomingDiv">
                <ul className="upcomingUl">
                  <li className="upcomingLi">Interests & Hobbies:</li>
                  <li className="upcomingLi"><b>Important Dates: </b> February 24</li>
                  <li className="upcomingLi"><b>Gift Ideas:</b></li>
                  <li className="upcomingLi"><b>Address:</b></li>
                </ul>
              </div>
            </div>


          </div>

        </div >
      </section >

      <section className="remindersNotes">
        <Reminders />
        <Notes />
      </section>
    </>
  );
}
