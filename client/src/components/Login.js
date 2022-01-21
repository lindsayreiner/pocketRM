/* eslint-disable no-useless-escape */
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";



export default function Login() {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="loginCont container">
        <h1 className="loginTitle">Log-in to your account</h1>
        <Form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ maxWidth: 450 }}
        >

          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('email', { required: true, pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })} />}
            />
          </Form.Group>
          {(errors.email && errors.email.type === 'required') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Email field is required.</p>
          )}
          {(errors.email && errors.email.type === 'pattern') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Enter a valid email address.</p>
          )}
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Form.Control type="password" {...field} {...register('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} />}
            />
          </Form.Group>
          {(errors.password && errors.password.type === 'required') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Password field is required.</p>
          )}
          {(errors.password && errors.password.type === 'pattern') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Passwords must be a minimum of 8 characters, and include at least one letter and one number.</p>
          )}
          <Button type="submit">
            Login
          </Button>
        </Form>

        <div className="mt-3 d-flex justify-center">
          New to PocketRM?{" "}
          <Link to="/register">
            <b>Sign Up</b>
          </Link>
        </div>
      </section>
    </>
  );
}