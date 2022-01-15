import React from "react";
import { Button, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from 'formik';

export default function Login() {
  return (
    <>
      <Stack className="loginCont">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form noValidate size="large" onSubmit={handleSubmit}>
              <div style={{ maxWidth: 450 }}>
                <h2 className="loginMsg">Log-in to your account</h2>
                <Form.Group>
                  <Form.Label className="mt-3">Email address</Form.Label>
                  <Form.Control type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="name@example.com" />
                </Form.Group>
                {errors.email && touched.email && errors.email}
                <Form.Group className="password mb-3" controlId="formBasicPassword">
                  <Form.Label className="mt-3">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password" />
                </Form.Group>
                {errors.password && touched.password && errors.password}
                <Button type="submit" disabled={isSubmitting}>
                  Login
                </Button>
              </div>
            </Form>

          )}
        </Formik>
        <div className="mt-3">
          New to PocketRM?{" "}
          <Link to="/register">
            <b>Sign Up</b>
          </Link>
        </div>
      </Stack>
    </>
  );
}
