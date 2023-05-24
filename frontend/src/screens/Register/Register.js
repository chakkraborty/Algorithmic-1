import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.css";
import { useState } from "react";
export default function Register() {

    const [data, setData] = useState({ lname: "", fname: "", email: "", password: "", rem: 0 });

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
    };

    return (
        <div className="formContainer">
            <div className="myForm d-flex justify-content-center align-items-center">
                <Form className="rounded p-4 p-sm-7 signup-form loginContainer">
                    <Form.Group className="mb-3">
                        <h1 className="heading">Register</h1>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            className="mb-3"
                            controlId="formBasicEmail"
                            type="text"
                            placeholder="First Name"
                            name="fname"
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            className="mb-3"
                            controlId="formBasicEmail"
                            type="text"
                            placeholder="Last Name"
                            name="lname"
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            className="mb-3"
                            controlId="formBasicEmail"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="email-input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInput}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="checkbox"
                            label="Remember me"
                            name="rem"
                            onChange={handleInput}
                        ></Form.Check>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button
                            className="submit-button"
                            variant="primary"
                            value="submit"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}