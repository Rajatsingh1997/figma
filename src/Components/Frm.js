import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Frm.css";
function Frm() {
  return (
    <div className="maindiv mb-5">
     
        <Form className="sediv">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Work email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="submitbtn">
          <Button variant="primary" type="submit" style={{width:"30%"}}>
            Submit
          </Button>
          </div>
        </Form>
     
    </div>
  );
}

export default Frm;
