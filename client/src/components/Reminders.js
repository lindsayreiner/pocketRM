import React, { useState } from 'react';
import "../styles/Reminders.css"
import { Button, Modal, Form } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function Reminders() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = React.useState(new Date());
    return (
        <>
            <div className="remindersCont">

                <div className="remindersHead green flex justify-center">
                    <h1 className="remindersTitle">Reminders</h1>

                    <Button variant="primary" onClick={handleShow}>
                        Add Reminder
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add a reminder</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label="DateTimePicker"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </LocalizationProvider>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ marginTop: '1rem' }}>Brighten someone's day. </Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary">Save</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}
