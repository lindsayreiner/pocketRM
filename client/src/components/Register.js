import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";

// eslint-disable-next-line no-useless-escape
const emailValidation = /^ (([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <section className="formCont container" style={{ height: '100vh' }}>
                <h1 className="regTitle">Register for PocketRM</h1>
                <Form className="form" onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 450 }}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First Name' type="text" {...register("firstName", { required: true })}
                        />
                    </Form.Group>
                    {errors.firstName && <p style={{ color: 'red' }}>Please enter your first name.</p>}
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last Name' type="text" {...register("lastName", { required: true })} />
                    </Form.Group>
                    {errors.lastName && <p style={{ color: 'red' }}>Please enter your last name.</p>}
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control placeholder='Email Address' type="email" {...register("email", {
                            required: true, pattern: { emailValidation }
                        })} />
                    </Form.Group>
                    {errors.email && <p style={{ color: 'red' }}>Invalid email.</p>}
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder='Password' type="password" {...register("password", { required: true, pattern: { passwordValidation } })} />
                    </Form.Group>
                    {errors.password && <p style={{ color: 'red' }}>Password field is required.</p>}
                    <Form.Group>
                        <Form.Check type="checkbox" label='I agree to the Terms and Conditions' />
                    </Form.Group>
                    <Button type='submit' color='violet'>Submit</Button>
                </Form>
            </section>
        </>
    )
}
