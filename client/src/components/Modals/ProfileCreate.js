import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from '../../utils/mutations';
//edit


export default function ProfileCreate() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        relationship: "",
        email: "",
        phone: "",
        address: "",
        birthday: "",
        occupation: "",
        hometown: "",
        company: "",
        partner: "",
        partnerName: "",
        children: "",
        childName: "",
        childBirthday: "",
        pets: "",
        petName: "",
        interestsHobbies: "",
        importantDates: "",
        giftIdeas: "",
        metAt: "",
    });

    const [createContact, { error, data }] = useMutation(CREATE_CONTACT);
    //modal functionality
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(">>>> formState >>>>", formState);

        try {
            const { data } = await createContact({
                variables: { ...formState },
            });

            navigate("/profile")

        } catch (e) {
            console.error(e);

        }
    };


    return (
        <>
            <Button className="addContactBtn"
                onClick={handleShow}
                style={{
                    marginLeft: '1em'
                }}
            ><FontAwesomeIcon icon="plus" /></Button>

            <Modal show={show} onHide={handleClose} dialogClassName="my-modal" >
                <Modal.Header closeButton>
                    <Modal.Title>Create Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="form profileModal" onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleInputChange}
                                value={formState.firstName || ""}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleInputChange}
                                value={formState.lastName || ""}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Relationship</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Friend, Colleague, Family, Acquaintance, Dating"
                                name="relationship"
                                onChange={handleInputChange}
                                value={formState.relationship || ""}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                onChange={handleInputChange}
                                value={formState.email || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                onChange={handleInputChange}
                                value={formState.phoneNumber || ""}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Where did you meet?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Coffee Shop, School, Tinder, Work"
                                name="metAt"
                                onChange={handleInputChange}
                                value={formState.metAt || ""}

                            />
                            <Form.Text className="required">Required</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Address"
                                name="address"
                                onChange={handleInputChange}
                                value={formState.address || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Birthday"
                                name="birthday"
                                onChange={handleInputChange}
                                value={formState.birthday || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Occupation</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Occupation"
                                name="occupation"
                                onChange={handleInputChange}
                                value={formState.occupation || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Company Name"
                                name="company"
                                onChange={handleInputChange}
                                value={formState.company || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Partner Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Partner Name, if applicable"
                                name="partnerName"
                                onChange={handleInputChange}
                                value={formState.partnerName || ""}

                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Children Name(s)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Children Name(s)"
                                name="childName"
                                onChange={handleInputChange}
                                value={formState.childName || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Children Birthday(s)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Child(ren) birthday(s)"
                                name="childBirthday"
                                onChange={handleInputChange}
                                value={formState.childBirthday || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Pet Name(s)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Pet name(s)"
                                name="petName"
                                onChange={handleInputChange}
                                value={formState.petName || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Interests and Hobbies</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Basket Weaving, Cosplay, Reading, Fitness"
                                name="interestsHobbies"
                                onChange={handleInputChange}
                                value={formState.interestsHobbies || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Important Date(s)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Graduation, Wedding, Due Date, Illness"
                                name="importantDates"
                                onChange={handleInputChange}
                                value={formState.importantDates || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gift Ideas</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Gift Ideas"
                                name="giftIdeas"
                                onChange={handleInputChange}
                                value={formState.giftIdeas || ""}
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" >
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>


            </Modal>
        </>
    );
}
