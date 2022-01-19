import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import defaultProfilePicture from "../images/defaultpf.png";
// import { Button } from "react-bootstrap";
import Contacts from "./Contacts"

// import fbLogo from "../images/fblogo_bnw.png";
// import iGLogo from "../images/iglogo_bnw.png";
// import twtLogo from "../images/twitter_bnw.png";
// import snapLogo from "../images/snapchatlogo_bnw.png";
// import yTLogo from "../images/youtubelogo_bnw.png";
// import tikTokLogo from "../images/tiktok_bnw.png";

export default function Profile() {
  return (
    <div className="profileCont">
      <Contacts />

      <div className="profile">
        <div className="profilePictureGrad">
          <img
            className="profilePicture"
            src={defaultProfilePicture}
            alt="profile"
          />
        </div>


      </div>
    </div>
  );
}

