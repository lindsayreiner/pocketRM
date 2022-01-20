import React from "react";
import defaultProfilePicture from "../images/defaultpf.png";
import { Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import fbLogo from "../images/fblogo_bnw.png";
// import iGLogo from "../images/iglogo_bnw.png";
// import twtLogo from "../images/twitter_bnw.png";
// import snapLogo from "../images/snapchatlogo_bnw.png";
// import yTLogo from "../images/youtubelogo_bnw.png";
// import tikTokLogo from "../images/tiktok_bnw.png";

import "../styles/Profile.css";

export default function Profile() {
  return (
    <div className="dashBoardCont">
      <div className="dashBoardBg">
        <div className="contactList">
          <div className="searchCont">
            <Form
              className="d-flex"
              style={{
                maxWidth: 350,
                padding: "1em",
              }}
            >
              <FormControl
                type="search"
                placeholder="Search Contacts"
                className="dashSearch me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
              <Button
                className="addContactBtn"
                style={{
                  marginLeft: "1em",
                }}
              >
                <FontAwesomeIcon icon="plus" />
              </Button>
            </Form>
            <div className="searchContactList">
              <ul className="contactListUl">
                <li className="contactListLi">
                  <Link className="profileLink" to="/profile:id">
                    Aaron Hernandez
                  </Link>
                </li>
                <li className="contactListLi">
                  <Link className="profileLink" to="/profile:id">
                    Andrew Matthews
                  </Link>
                </li>
                <li className="contactListLi">
                  <Link className="profileLink" to="/profile:id">
                    Anita Smith
                  </Link>
                </li>
                <li className="contactListLi">
                  <Link className="profileLink" to="/profile:id">
                    Brian Cruz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profileBg">
          <div className="rightPanel">
            <div className="profilePictureGrad">
              <img
                className="profilePicture"
                src={defaultProfilePicture}
                alt="profile"
              />
            </div>
            <Button className="uploadImage">Upload a new image</Button>
            {/* <div className="socialMediaSection">
              <div className="socialHeaderGrad"></div>
              <div className="socialHeader">Social Media</div>
              <div className="socialMediaGrad">
                <div className="socialLogos">
                  <img className="fbLogo logo" src={fbLogo} />
                  <img className="iGLogo logo" src={iGLogo} />
                  <img className="twtLogo logo" src={twtLogo} />
                  <img className="snapLogo logo" src={snapLogo} />
                  <img className="yTLogo logo" src={yTLogo} />
                  <img className="tikTokLogo logo" src={tikTokLogo} />
                </div>
              </div>
            </div> */}
          </div>
          <div className="profileSection">
            <div className="profileNameHeader">Placeholder Name</div>
            <div className="profileInfo">
              <div className="profileHeaderGrad"></div>
              <div className="profileHeader">Contact Information</div>
              <div className="contactInfoGrad">
                <div className="contactInfo">
                  <div className="phoneNumberCol">
                    Phone Number:
                    <div className="phoneNumber">(XXX)XXX-XXXX</div>
                  </div>
                  <div className="emailCol">
                    Email:<div className="email">example@gmail.com</div>
                  </div>
                  <div className="addressCol">
                    Address:
                    <div className="address">0000 Example Dr Example, Ex</div>
                  </div>
                </div>
              </div>
              <div className="profileHeaderGrad"></div>
              <div className="profileHeader">General Information</div>
              <div className="generalInfoGrad">
                <div className="generalInfo">
                  <div className="birthdayCol">
                    Birthday:
                    <div className="birthday">01/01/1990</div>
                  </div>
                  <div className="sexCol">
                    Sex:
                    <div className="sex">Male</div>
                  </div>
                  <div className="hometownCol">
                    Hometown:
                    <div className="hometown">Unknown</div>
                  </div>
                  <div className="occupationCol">
                    Occupation:
                    <div className="occupation">Unknown</div>
                  </div>
                  <div className="marriedCol">
                    Married:
                    <div className="married">Unknown</div>
                  </div>
                  <div className="spouseCol">
                    Spouse:
                    <div className="spouse">Unknown</div>
                  </div>
                  <div className="childrenCol">
                    Children:
                    <div className="children">Unknown</div>
                  </div>
                  <div className="petsCol">
                    Pets:
                    <div className="pets">Unknown</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="noteSection">
              <div className="noteHeaderGrad"></div>
              <div className="noteHeader">Notes</div>
              <div className="noteSectionGrad">
                <div className="notes">
                  <div className="noteField">
                    Note:<div className="noteAttr">Sample Note</div>
                  </div>
                  <div className="noteField">
                    Note:
                    <div className="noteAttr">
                      Sample Note that is longer and creates two lines.
                    </div>
                  </div>
                  <div className="noteField">
                    Note:<div className="noteAttr">Sample Note</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
