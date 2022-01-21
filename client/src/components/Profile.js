import React from "react";
import "../styles/Profile.css";
// import { Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import defaultProfilePicture from "../images/avatar.jpg";
import Contacts from "./Contacts";
import Reminders from "./Reminders";
import Notes from "./Notes";
import ProfileEdit from "../components/Modals/ProfileEdit";

// import fbLogo from "../images/fblogo_bnw.png";
// import iGLogo from "../images/iglogo_bnw.png";
// import twtLogo from "../images/twitter_bnw.png";
// import snapLogo from "../images/snapchatlogo_bnw.png";
// import yTLogo from "../images/youtubelogo_bnw.png";
// import tikTokLogo from "../images/tiktok_bnw.png";

export default function Profile() {
  return (
    <>
      <section className="profileCont">
        <Contacts />

        <div className="profile">
          <h1 className="connectionName">
            Person's Name
            {<ProfileEdit />}
          </h1>
          <div className="contactTop">
            <div className="mainDetails">
              <h2 className="sectionTitle orange">Personal Info</h2>
              <ul className="profileContentUl">
                <li className="profileContentLi">Met at: </li>
                <li className="profileContentLi">Phone: </li>
                <li className="profileContentLi">Email: </li>
                <li className="profileContentLi">Address: </li>
              </ul>
            </div>

            <div className="profilePicCont">
              <div className="profilePictureGrad">
                <img
                  className="profilePicture"
                  src={defaultProfilePicture}
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div className="contactMid">
            <div className="demoDetails">
              <h2 className="sectionTitle blue">Home Life</h2>
              <ul className="profileContentUl">
                <li className="profileContentLi">Birthday: </li>
                <li className="profileContentLi">Hometown: </li>
                <li className="profileContentLi">Partner: </li>
                <li className="profileContentLi">Children: </li>
                <li className="profileContentLi">Pets: </li>
                <li className="profileContentLi">Birthday: </li>
                <li className="profileContentLi">Hometown: </li>
                <li className="profileContentLi">Partner: </li>
                <li className="profileContentLi">Children: </li>
                <li className="profileContentLi">Pets: </li>
              </ul>
            </div>
            <div className="demoDetails">
              <h2 className="sectionTitle pink">General Info</h2>
              <ul className="profileContentUl">
                <li className="profileContentLi">Met at: </li>
                <li className="profileContentLi">Phone: </li>
                <li className="profileContentLi">Email: </li>
                <li className="profileContentLi">Address: </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="remindersNotes">
        <Reminders />
        <Notes />
      </section>
    </>
  );
}
