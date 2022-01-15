import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import pocketRMLogo from "../images/pocketrm-logo.png";

import "normalize.css";
import "../styles/App.css";

export default function Navbar({ isLoggedIn }) {
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
        <label htmlFor="navToggle" className="navToggleLabel">
          <span></span>
        </label>
        {/* Search Bar */}
        {isLoggedIn ? (
          <>
            <ul className="navBtnCont">
              <li className="navBtn">
                <NavLink className="navBtnLink" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search Contacts"
                className="me-2"
                aria-label="Search"
              />
              <Button>Search</Button>
            </Form>
          </>
        ) : (
          <> </>
        )}
        ;{/* login/registration buttons */}
        <div className="acctBtns">
          <Link to="/login">
            <Button id="login-button">Login</Button>
          </Link>
          <Link to="/register">
            {" "}
            <Button id="register-button">Sign up</Button>
          </Link>
        </div>
      </nav>
    </>
  );
}
