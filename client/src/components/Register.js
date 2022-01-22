import React, { useState } from "react";
import "../styles/Register.css";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import "../styles/Register.css";

const RegisterForm = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [validated] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);
  const [showAlert, setShowAlert] = useState(false);

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

    try {
      console.log(userFormData);
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
      console.log(data);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <>
      <section className="formCont container">
        <Container data-aos="zoom-in" data-aos-delay="2">
          <h1 className="regTitle">Register for PocketRM</h1>
          <Form
            className="form"
            noValidate
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
              <Form.Control.Feedback type="invalid">
                First name is required!
              </Form.Control.Feedback>
            </Form.Group>
            {/* {errors.firstName && errors.firstName.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                First name field is required.
              </p>
            )}

            {errors.firstName && errors.firstName.type === "pattern" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Fix first name spelling.
              </p>
            )} */}
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
              <Form.Control.Feedback type="invalid">
                Last name is required!
              </Form.Control.Feedback>
            </Form.Group>
            {/* {errors.lastName && errors.lastName.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Last name field is required.
              </p>
            )}
            {errors.lastName && errors.lastName.type === "pattern" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Fix last name spelling.
              </p>
            )} */}
            <Form.Group>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your email"
                name="email"
                onChange={handleInputChange}
                value={userFormData.email}
                required
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
                Passwords must be a minimum of 8 characters, and include at
                least one letter and one number.
              </p>
            )} */}
            <Button
              disabled={
                !(
                  userFormData.firstName &&
                  userFormData.lastName &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
              className="btn-primary"
              href="/dashboard"
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
        </Container>
      </section>
    </>
  );
};

export default RegisterForm;
