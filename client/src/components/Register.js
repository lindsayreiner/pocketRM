/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/auth";


import "../styles/Register.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  /*eslint-disable */
  const [errors] = useState({
    email: {
      pattern: {
        value: "^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$",
      },
    },
    password: {
      pattern: { value: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" },
    },
  });

  /*eslint-enable */
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [addUser, { error }] = useMutation(ADD_USER);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    console.log(userFormData);

    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      console.log(data);

      Auth.login(data.addUser.token);
      navigate("/profile")

    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    // setUserFormData({
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    // });
  };

  return (
    <>
      <section className="formCont container">
        <h1 className="regTitle">Register for PocketRM</h1>
        <Form
          className="form"
          // noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
          style={{ maxWidth: 450 }}
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your first name"
              name="firstName"
              onChange={handleInputChange}
              value={userFormData.firstName}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              First name is required!
            </Form.Control.Feedback> */}
          </Form.Group>
          {/* {errors.firstName && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              First name field is required.
            </p> 
          )}*/}
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your last name"
              name="lastName"
              onChange={handleInputChange}
              value={userFormData.lastName}
              required
            />
            {/* <Form.Control.Feedback type="invalid">
              Last name is required!
            </Form.Control.Feedback> */}
          </Form.Group>
          {/* {userFormData.lastName && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Last name field is required.
            </p>
          )} */}
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            // pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
            />
            {/* <Form.Control.Feedback type="invalid">
              Email is required and must be a valid email address.
            </Form.Control.Feedback> */}
          </Form.Group>
          {/* {errors.email && errors.email.type === "required" && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>
              Email field is required.
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
            // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            />
            {/* <Form.Control.Feedback type="invalid">
              Password is required and must be a minimum of 8 characters, and
              include at least one letter and one number.
            </Form.Control.Feedback> */}
          </Form.Group>
          {/* {errors.password && errors.password.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Password field is required.
              </p>
            )} */}
          {/* {errors.password && (
            <p style={{ marginBottom: "0.85rem" }}>
              Passwords must be a minimum of 8 characters, and include at least
              one letter and one number.
            </p>
          )} */}
          <Button
            disabled={
              (
                userFormData.firstName &&
                userFormData.lastName &&
                userFormData.email &&
                !errors.email &&
                userFormData.password &&
                !errors.password
              )
            }
            type="submit"
            className="btn-primary"
          >
            Submit
          </Button>
        </Form>
        <div className="mt-3 d-flex justify-center">
          Already have an account?
          <Link to="/login" id="login-link" style={{ marginLeft: "0.3rem" }}>
            <b>Log in</b>
          </Link>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
