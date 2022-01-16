import React from 'react';
import { Button, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
    return (
        <>
            <section className="dashboardCont">
                <div className="contactList">
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
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                            <Button className="addContactBtn"
                                style={{
                                    marginLeft: '1em'
                                }}
                            ><FontAwesomeIcon icon="plus" /></Button>
                        </Form>
                    </div>
                </div>

                <div className="upcomingCont">
                    <div className="wrapper">
                        <p className="upcomingTitle">Birthdays</p>
                        <div id="birthdays" className="upcomingDiv"></div>
                    </div>

                    <div className="wrapper">
                        <p className="upcomingTitle">Anniversaries</p>
                        <div id="anniversaries" className="upcomingDiv"></div>
                    </div>

                    <div className="wrapper">
                        <p className="upcomingTitle">Reminders</p>
                        <div id="reminders" className="upcomingDiv"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
