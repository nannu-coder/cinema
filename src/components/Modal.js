import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useMovies from "../Hooks/useMovie";
import Button from "./Button";

const ModalComponents = ({ movie }) => {
  const { setShow, show } = useMovies();
  const handleClose = () => setShow(false);
  const [data, setData] = useState({});
  const { name } = movie.show;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...data };
    const newFormData = [{ formData, data }];
    localStorage.setItem("bookedBy", JSON.stringify(newFormData));
    console.log(newFormData);
  };

  const handleChange = (e) => {
    const label = e.target.name;
    const value = e.target.value;
    const newFormData = { ...data };
    newFormData[label] = value;
    setData(newFormData);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booked {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dhaka, Bangladesh"
                name="address"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Button text="Booked" type="submit" />
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalComponents;
