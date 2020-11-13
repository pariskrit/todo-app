import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Modals(props) {
  const {
    addDescription,
    changeAddDescription,
    editDescription,
    changeEditDescription,
    addTodo,
    showAddModal,
    editTodo,
    ...rest
  } = props;

  useEffect(() => {
    console.log("modal rendered");
  });

  return showAddModal ? (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Todo"
              value={addDescription || ""}
              onChange={changeAddDescription}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={addTodo}>
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  ) : (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Todo"
              value={editDescription}
              onChange={changeEditDescription}
            />
          </Form.Group>

          <Button variant="primary" type="button" onClick={editTodo}>
            Edit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default React.memo(Modals);
