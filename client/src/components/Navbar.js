import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import pocketRMLogo from "../images/pocketrm-logo.png";

import "normalize.css";
import "../styles/App.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            className="navLogo"
            src={pocketRMLogo}
            alt="PocketRM Logo"
            height="40px"
          />
        </Link>

        <input type="checkbox" id="navToggle" className="navToggle" />

        <ul className="navBtnCont">
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/contacts">
              Contacts
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/calendar">
              Calendar
            </NavLink>
          </li>
          <li className="navBtn">
            <NavLink className="navBtnLink" to="/reminders">
              Reminders
            </NavLink>
          </li>
        </ul>

        <label htmlFor="navToggle" className="navToggleLabel">
          <span></span>
        </label>

        <div className="acctBtns">
          <Link to="/login">
            <Button id="login-button">Login</Button>
          </Link>
          <Link to="/register">
            {" "}
            <Button>Sign up</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
