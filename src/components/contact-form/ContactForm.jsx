import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class ContactForm extends Component {
  render() {
    return (
      <div>
        <Form noValidate className="w-50 m-auto">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Create Contact</Form.Label>
            <Form.Control required type="text" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="numbers">
            <Form.Label>Numbers</Form.Label>
            <Form.Control required type="number" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact-section">
            <Form.Label>Contact sections</Form.Label>
            <Form.Select>
              <option value="high">Favourites</option>
              <option value="middle">Family</option>
              <option value="low">Friends</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="w-100">
            Add todo
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
