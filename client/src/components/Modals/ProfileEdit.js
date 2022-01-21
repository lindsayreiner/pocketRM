import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useMutation, useQuery } from "@apollo/react-hooks";

// TODO: add mutation for edit user

export default function ProfileEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // TODO: Need to query for default values
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="getStartedBtn btn-lg"
        color="violet"
      >
        Edit <FontAwesomeIcon icon="edit" />
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          {/* TODO: add query for name */}
          <Modal.Title>Edit (Contact Name's) Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    {...register("firstName", {
                      required: true,
                    })}
                  />
                )}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required="true"
                type="input"
                placeholder="Query last name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Relationship</Form.Label>
              <Form.Control required="true" type="input" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required="true" type="phone" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Where did you meet?</Form.Label>
              <Form.Control required="true" type="input" placeholder="" />{" "}
            </Form.Group>
            {errors.firstName && errors.firstName.type === "required" && (
              <p style={{ color: "red", marginBottom: "0.85rem" }}>
                Email field is required.
              </p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Occupation</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Partner?</Form.Label>
              <Form.Select aria-label="Partner">
                <option value="true">Yes</option>
                <option value="false">No</option>
                <option>Decline to answer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Partner Name</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Children?</Form.Label>
              <Form.Select aria-label="Children">
                <option value="false">No</option>
                <option value="true">Yes</option>
                <option>Decline to answer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Children Name(s)</Form.Label>
              <Form.Control type="input" placeholder="" />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Children Birthday(s)</Form.Label>
              <Form.Control type="input" placeholder="" />
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pets?</Form.Label>
              <Form.Select aria-label="Pets">
                <option value="false">No</option>
                <option value="true">Yes</option>
                <option>Decline to answer</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet Name(s)</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Interests or Hobbies</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Important Date(s)</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
              <Form.Text className="text-muted">Optional</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gift Ideas</Form.Label>
              <Form.Control type="input" placeholder="" />{" "}
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
