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

  // logout feature
  const logout = () => {
    try {
      const expired = auth.loggedIn();

      if (!expired) {
        return false;
      }

      setIsLoggedIn(expired);
    } catch (err) {
      console.error(err);
    }
    window.localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar">
        <Link className="navLogoCont" to="/">
          <img
            className="navLogo"
            src={pocketRMLogo}
            alt="PocketRM Logo"
            height="45px"
          />
        </Link>

        {location.pathname !== "/login" ? (
          location.pathname !== "/" ? (
            location.pathname !== "/register" ? (
              location.pathname !== "/dashboard" ? (
                location.pathname !== "/profile" ? (
                  isLoggedIn ? (
                    <>
                      <Button
                        onClick={logout}
                        style={{ marginRight: "2rem" }}
                        to="/"
                      >
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
                    <Button
                      onClick={logout}
                      style={{ marginRight: "2rem" }}
                      to="/"
                    >
                      Logout
                    </Button>
                  </>
                )
              ) : (
                <>
                  {" "}
                  <Button
                    onClick={logout}
                    style={{ marginRight: "2rem" }}
                    to="/"
                  >
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
