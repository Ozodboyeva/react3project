import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <InputGroup className="my-3">
        <Form.Control placeholder="Searching todo" />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
    );
  }
}

export default Header;
