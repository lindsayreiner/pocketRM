import React from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
// import Image from 'react-bootstrap/Image';


export default function Contacts() {
    return (
        <>
            <section className="contactList">
                <Form
                    className="d-flex"
                    style={{
                        maxWidth: 350,
                        padding: '1em'
                    }}>
                    <FormControl
                        type="search"
                        placeholder="Search Contacts"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Search</Button>
                </Form>

            </section>
        </>
    )

}
