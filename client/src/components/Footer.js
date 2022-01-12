import React from 'react';
import { Link } from "react-router-dom";
import pocketRMLogo from "../images/pocketrm-logo.png";

export default function Footer() {
    return (
        <>
            <footer>
                <Link to="/">
                    <img
                        className="footNavLogo"
                        src={pocketRMLogo}
                        alt="PocketRM Logo"
                        height="35px"
                    />
                </Link>
            </footer>
        </>
    )
}
