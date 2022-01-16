import React from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';


export default function Contacts() {
    return (
        <>
            <section className="contactList">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>

            </section>
        </>
    )
}
