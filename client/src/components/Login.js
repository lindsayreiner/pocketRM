import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="loginCont ">
        <div style={{ maxWidth: 450 }}>
          <h2 className="loginMsg">Log-in to your account</h2>
          <Form size="large">
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

<<<<<<< HEAD
                        <Button>
                            Login
                        </Button>

                    </Form>
                    <div>
                        New to PocketRM? <Link to='/register'><b>Sign Up</b></Link>
                    </div>
                </div>
            </section>
        </>
    )
=======
            <Button>Login</Button>
          </Form>
          <div>
            New to PocketRM?{" "}
            <Link to="/register">
              <b>Sign Up</b>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
>>>>>>> main
}
