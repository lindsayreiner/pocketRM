/* eslint-disable no-useless-escape */
import { Button, Form, Container, Alert } from "react-bootstrap";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { loginUser } from "../utils/API";
import Auth from "../utils/auth";
// import Contacts from "./Contacts";

export default function Login() {
  const {
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
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
    try {
      const response = await loginUser(userFormData);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
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
      <section className="loginCont container">
        <Container data-aos="fade-in">
          <h1 className="loginTitle">Login to your account</h1>
          <Form
            className="form"
            onSubmit={handleFormSubmit}
            style={{ maxWidth: 450 }}
            validated={validated}
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
              <Form.Label>Email Address</Form.Label>
              <Controller
                name="email"
                control={control}
                // eslint-disable-next-line no-useless-escape
                render={({ field }) => (
                  <Form.Control
                    onChange={handleInputChange}
                    value={userFormData.email}
                    {...field}
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+\.\S+$/,
                    })}
                  />
                )}
              />
            </Form.Group>
            {errors.email && errors.email.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Email field is required.
              </p>
            )}
            {/* {errors.email && errors.email.type === "pattern" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Enter a valid email address.
              </p>
            )} */}
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    onChange={handleInputChange}
                    value={userFormData.password}
                    type="password"
                    {...field}
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    })}
                  />
                )}
              />
            </Form.Group>
            {errors.password && errors.password.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Password field is required.
              </p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Passwords must be a minimum of 8 characters, and include at
                least one letter and one number.
              </p>
            )}
            <Button type="submit">Login</Button>
          </Form>

          <div className="mt-3 d-flex justify-center">
            New to PocketRM?
            <Link to="/register" id="sign-up-link">
              <b>Sign Up</b>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
