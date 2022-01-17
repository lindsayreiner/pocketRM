import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <Button className="deleteContactBtn"
            ><FontAwesomeIcon icon="trash" /></Button>
        </div>
    )
}
