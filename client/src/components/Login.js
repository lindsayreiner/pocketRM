import React from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <>
            <Row className="loginCont container" style={{ height: '100vh', verticalAlign: 'middle', textAlign: 'center' }}>
                <Col style={{ maxWidth: 450 }}>
                    <h2 className="loginMsg" style={{ color: 'violet', textAlign: 'center' }}>
                        Log-in to your account
                    </h2>
                    <Form size='large'>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                            {/* <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' /> */}
                            {/* <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            /> */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button color='violet' fluid size='large'>
                            Login
                        </Button>

                    </Form>
                    <div>
                        New to PocketRM? <Link to='/register'>Sign Up</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
