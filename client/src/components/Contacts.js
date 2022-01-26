import React from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_ALL_CONTACTS } from '../utils/queries';


import { Button, Form, FormControl } from "react-bootstrap";
import '../styles/Contacts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProfileCreate from "./Modals/ProfileCreate.js"


export default function Contacts() {

    // const { data } = useQuery(GET_ALL_CONTACTS);
    // const contacts = data?.contacts || [];

    return (
        <>
            <section className="contactList">
                <div className="searchCont">
                    <Form
                        className="d-flex"
                        style={{
                            maxWidth: 350,
                            padding: '1em'
                        }}>
                        <FormControl
                            type="search"
                            placeholder="Search Contacts"
                            className="dashSearch me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                        <ProfileCreate />

                    </Form>
                    <div className="searchContactList">
                        <ul className="contactListUl">
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Aaron Fernandez</Button></li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )

}
