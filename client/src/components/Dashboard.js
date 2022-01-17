import React from 'react';
import { Link } from "react-router-dom";
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
                                <li className="contactListLi"><Link className="profileLink" to="/profile:id">Aaron Hernandez</Link></li>
                                <li className="contactListLi"><Link className="profileLink" to="/profile:id">Andrew Matthews</Link></li>
                                <li className="contactListLi"><Link className="profileLink" to="/profile:id">Anita Smith</Link></li>
                                <li className="contactListLi"><Link className="profileLink" to="/profile:id">Brian Cruz</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="upcomingCont">
                    <h1 className="upcomingMain">Upcoming</h1>

                    <div className="wrapper">
                        <p className="upcomingTitle">Birthdays</p>
                        <div id="birthdays" className="upcomingDiv">
                            <ul className="upcomingUl">
                                <li className="upcomingLi"><b><Link className="profileLink" to="/profile:id">Melanie's</Link> Birthday:</b> January 6</li>
                                <li className="upcomingLi"><b>Dad's Birthday:</b> February 24</li>
                                <li className="upcomingLi"><b>Liz's Birthday:</b> April 1</li>
                                <li className="upcomingLi"><b>Kaley's Birthday:</b> April 4</li>
                            </ul>
                        </div>
                    </div>

                    <div className="wrapper">
                        <p className="upcomingTitle">Anniversaries</p>
                        <div id="anniversaries" className="upcomingDiv"></div>
                    </div>

                    <div className="wrapper">
                        <p className="upcomingTitle">Reminders</p>
                        <div id="reminders" className="upcomingDiv">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
