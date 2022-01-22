/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

import "../styles/Login.css";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log(userFormData);

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      // Store the token in local storage
      Auth.login(data.login.token);
      console.log(data);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="loginCont container">
        <h1 className="loginTitle">Login to your account</h1>
        <Form
          className="form"
          style={{ maxWidth: 450 }}
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
              // pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
          {/* {errors.email && errors.email.type === "required" && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Email field is required.
            </p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Enter a valid email address.
            </p>
          )} */}
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
              // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          {/* {errors.password && errors.password.type === "required" && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Password field is required.
            </p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Passwords must be a minimum of 8 characters, and include at least
              one letter and one number.
            </p>
          )} */}
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            className="btn-primary"
            href="/dashboard"
          >
            Submit
          </Button>
        </Form>

        <div className="mt-3 d-flex justify-center">
          New to PocketRM?{" "}
          <Link to="/register" id="login-link">
            <b>Sign Up</b>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
