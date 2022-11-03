import { Modal, Button, Form, Stack } from "rsuite";
import React, { useState } from "react";

export default function TodoModal({ open, handleClose, onSubmit }) {
    const [values, setValues] = useState({});

    return (
        <Modal backdrop={true} keyboard={false} open={open} onClose={handleClose}>
            <Form fluid onSubmit={() => onSubmit(values)} onChange={values => setValues(values)}>
                <Modal.Header>
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="title">
                        <Form.ControlLabel>Title</Form.ControlLabel>
                        <Form.Control name="title" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.ControlLabel>Description</Form.ControlLabel>
                        <Form.Control name="description" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Stack justifyContent={"space-between"}>
                        <Button appearance="primary" type={"submit"}>
                            Submit
                        </Button>
                        <Button appearance="default" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Stack>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
