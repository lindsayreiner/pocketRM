import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";


// eslint-disable-next-line no-useless-escape
const emailValidation =
  /^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidation =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export default function Register() {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
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
              render={({ field }) => <Form.Control {...field} {...register('firstName', { required: true })} />}
            />
          </Form.Group>
          {errors.firstName && (
            <p style={{ color: "red" }}>Please enter your first name.</p>
          )}
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('lastName', { required: true })} />}
            />
          </Form.Group>
          {errors.lastName && (
            <p style={{ color: "red" }}>Please enter your last name.</p>
          )}
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('email', { required: true })} />}
            />
          </Form.Group>
          {errors.email && <p style={{ color: "red" }}>Invalid email.</p>}
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Form.Control {...field} {...register('password', { required: true, minLength: 8 })} />}
            />
          </Form.Group>
          {(errors.password && errors.password.type === 'required') && (
            <p style={{ color: "red" }}>Password field is required.</p>
          )}
          {(errors.password && errors.password.type === 'maxLength') && (
            <p style={{ color: "red" }}>Minimum password length is 7.</p>
          )}
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="I agree to the Terms and Conditions"
            />
          </Form.Group>
          <Button type="submit" color="violet">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
}
