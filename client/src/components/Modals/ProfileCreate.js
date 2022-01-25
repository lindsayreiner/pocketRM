import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from '../../utils/mutations';


export default function ProfileEdit() {
    const [userFormData, setUserFormData] = useState({
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

    const [loginUser, { error }] = useMutation(CREATE_CONTACT);
    //modal functionality
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log('hi')
        }

        console.log(userFormData);

        try {
            const { data } = await loginUser({
                variables: { ...userFormData },
            });

            navigate("/profile")

        } catch (e) {
            console.error(e);

        }

        setUserFormData({
            email: "",
            password: "",
        });
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
                                value={userFormData.firstName}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleInputChange}
                                value={userFormData.lastName}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Relationship</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Friend, Colleague, Family, Acquaintance, Dating"
                                name="relationship"
                                onChange={handleInputChange}
                                value={userFormData.relationship}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email Address"
                                name="email"
                                onChange={handleInputChange}
                                value={userFormData.email}
                                required
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
                                value={userFormData.phoneNumber}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Where did you meet?</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Coffee Shop, School, Tinder, Work"
                                name="metAt"
                                onChange={handleInputChange}
                                value={userFormData.metAt}
                                required
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
                                value={userFormData.address}
                                required
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
                                value={userFormData.birthday}
                                required
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
                                value={userFormData.occupation}
                                required
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
                                value={userFormData.company}
                                required
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
                                value={userFormData.partnerName}
                                required
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
                                value={userFormData.childName}
                                required
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
                                value={userFormData.childBirthday}
                                required
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
                                value={userFormData.petName}
                                required
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
                                value={userFormData.interestsHobbies}
                                required
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
                                value={userFormData.importantDates}
                                required
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
                                value={userFormData.giftIdeas}
                                required
                            />
                            <Form.Text className="text-muted">Optional</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
