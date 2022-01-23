/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Form, FormControl } from "react-bootstrap";
import pocketRMLogo from "../images/pocketrm-logo.png";
import auth from "../utils/auth";

import "normalize.css";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let location = useLocation();
  useEffect(() => {
    const displaySearchBar = async () => {
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

    displaySearchBar();
  }, [isLoggedIn]);
  return (
    <>
      <nav className="navbar">
        <Link className="navLogoCont" to="/">
          <img
            className="navLogo"
            src={pocketRMLogo}
            alt="PocketRM Logo"
            height="40px"
          />
        </Link>
        {/* <input type="checkbox" id="navToggle" className="navToggle" />
        <label htmlFor="navToggle" className="navToggleLabel">
          <span></span>
        </label> */}
        {/* Search Bar */}
        {location.pathname !== "/login" ? (
          location.pathname !== "/" ? (
            location.pathname !== "/register" ? (
              location.pathname !== "/dashboard" ? (
                location.pathname !== "/profile" ? (
                  isLoggedIn ? (
                    <>
                      <Button style={{ marginRight: "2rem" }} to="/">
                        Logout
                      </Button>
                    </>
                  ) : (
                    <div className="acctBtns">
                      <Link to="/login">
                        <Button id="login-button">Login</Button>
                      </Link>
                      <Link to="/register">
                        {" "}
                        <Button id="register-button">Sign up</Button>
                      </Link>
                    </div>
                  )
                ) : (
                  <>
                    {" "}
                    <Button style={{ marginRight: "2rem" }} to="/">
                      Logout
                    </Button>
                  </>
                )
              ) : (
                <>
                  {" "}
                  <Button style={{ marginRight: "2rem" }} to="/">
                    Logout
                  </Button>
                </>
              )
            ) : (
              <> </>
            )
          ) : (
            <> </>
          )
        ) : (
          <> </>
        )}
      </nav>
    </>
  );
}
