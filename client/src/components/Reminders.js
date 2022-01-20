import React from 'react';
import "../styles/Reminders.css"
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reminders() {
    return (
        <>
            <div className="remindersCont">

                <div className="remindersHead orange flex justify-center">
                    <h1 className="remindersTitle">Reminders</h1>


                    <Button className="addContactBtn"
                        style={{
                            marginLeft: '1em'
                        }}
                    ><FontAwesomeIcon icon="plus" /></Button>
                </div>
            </div>
        </>
    )
}
