import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="myForm d-flex justify-content-center align-items-center">
        <Form className="rounded p-4 p-sm-3 signup-form">
          <Form.Group className="mb-3">
            <h1 className="heading">Login</h1>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              className="mb-3"
              controlId="formBasicEmail"
              type="email"
              placeholder="Email"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="email-input"
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Remember me"></Form.Check>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button
              className="submit-button"
              variant="primary"
              value="submit"
              type="submit"
            >
              submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
