import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Register() {
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
      <section className="formCont container">
        <h1 className="regTitle">Register for PocketRM</h1>
        <Form
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          style={{ maxWidth: 450 }}
        >
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('firstName', { required: true, pattern: /^[a-z ,.'-]+$/i })} />}
            />
          </Form.Group>
          {(errors.firstName && errors.firstName.type === 'required') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>First name field is required.</p>
          )}
          {(errors.firstName && errors.firstName.type === 'pattern') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Fix first name spelling.</p>
          )}
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('lastName', { required: true, pattern: /^[a-z ,.'-]+$/i })} />}
            />
          </Form.Group>
          {(errors.lastName && errors.lastName.type === 'required') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Last name field is required.</p>
          )}
          {(errors.lastName && errors.lastName.type === 'pattern') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Fix last name spelling.</p>
          )}
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Controller
              name="email"
              control={control}
              // eslint-disable-next-line no-useless-escape
              render={({ field }) => <Form.Control {...field} {...register('email', { required: true, pattern: /^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />}
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
              render={({ field }) => <Form.Control {...field} {...register('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })} />}
            />
          </Form.Group>
          {(errors.password && errors.password.type === 'required') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Password field is required.</p>
          )}
          {(errors.password && errors.password.type === 'pattern') && (
            <p style={{ color: "red", marginBottom: "0.85rem" }}>Passwords must be a minimum of 8 characters, and include at least one letter and one number.</p>
          )}
          <Button type="submit">
            Submit
          </Button>
        </Form>
        <div className="mt-3 d-flex justify-center">
          Already have an account?{" "}
          <Link to="/login">
            <b>Log in</b>
          </Link>
        </div>
      </section>
    </>
  );
}
