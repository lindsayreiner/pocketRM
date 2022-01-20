import React from "react";
import "../styles/Notes.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Notes() {
    return (
        <>
            <div className="notesCont">

                <div className="notesHead green flex justify-center">
                    <h1 className="notesTitle">Notes</h1>


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
