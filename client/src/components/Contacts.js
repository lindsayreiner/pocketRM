import React from 'react';
// import { QUERY_ALL_CONTACTS, QUERY_SINGLE_CONTACT } from '../utils/queries.js';
// import { useQuery } from '@apollo/client';
import { Button, Form, FormControl } from "react-bootstrap";
import '../styles/Contacts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contacts() {
    // const { loading, data } = useQuery(QUERY_ALL_CONTACTS, QUERY_SINGLE_CONTACT)
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
                        <Button className="addContactBtn"
                            style={{
                                marginLeft: '1em'
                            }}
                        ><FontAwesomeIcon icon="plus" /></Button>
                    </Form>
                    <div className="searchContactList">
                        <ul className="contactListUl">
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Anita Smith</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Brian Cruz</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Anita Smith</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Brian Cruz</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Anita Smith</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Brian Cruz</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Anita Smith</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Brian Cruz</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profileclassName">Aaron Fernandez</Button></li>
                            <li className="contactListLi"><Button className="profileBtn" to="/profile:id">Andrew Matthews</Button></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )

}
