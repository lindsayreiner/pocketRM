import React, { useState } from "react";
import "../styles/Notes.css";
import { Button, Modal, Form, Card, ListGroup } from "react-bootstrap";


export default function Notes() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="notesCont">

                <div className="notesHead green flex justify-center">
                    <h1 className="notesTitle">Notes</h1>


                    <Button variant="primary" onClick={handleShow}>
                        Add Note
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add a note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ marginTop: '1rem' }}>What else do you want to remember? </Form.Label>
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

                <div className="notesBody">
                    <Card className="profileContentUl">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="profileContentLi">
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={'I want to remember this.'}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </ListGroup.Item>
                            <ListGroup.Item className="profileContentLi">
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={'Conversation reminders, '}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </ListGroup.Item>
                            <ListGroup.Item className="profileContentLi">
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type={type}
                                                id={`default-${type}`}
                                                label={'Click the checkbox to discard the note.'}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </>
    )
}
