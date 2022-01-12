import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

import 'normalize.css';
import '../styles/App.css'



export default function Navbar() {
    return (
        <>

            <nav className="navbar">
                <Link className="bizName" to="/"><b>PocketRM</b></Link>
                <input type="checkbox" id="navToggle" className="navToggle" />
                <ul className="navBtnCont">

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contacts">Contacts</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/calendar">Calendar</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/reminders" >Reminders</NavLink>
                    </li>
                </ul>
                <label for="navToggle" className="navToggleLabel">
                    <span></span>
                </label>
                <div className="acctBtns container">
                    <section>
                        <Link to="/login"><Button inverted color='violet'>
                            Login
                        </Button></Link>
                        <Link to="/register"> <Button inverted color='violet'>
                            Sign up
                        </Button></Link>
                    </section>
                </div>
            </nav >
        </ >
    )
}
