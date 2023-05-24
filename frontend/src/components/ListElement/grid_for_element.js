import { Container, Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./grid.css";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Check from "react-bootstrap/FormCheckInput";

export default function (props) {


    const [badge, setBadge] = useState("sucess");

    const func = (str) => {
        if (str === "Medium")
            setBadge("warning");
        else if (str === "Hard")
            setBadge("danger");
        else
            setBadge("success");
    }

    useEffect(() => {
        func(props.difficulty);
    })

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col className="justify-content-center align-center text-md-right">
                        <Check
                            type="checkbox"
                            name="rem"
                            className='bg-inherit'
                            size="lg"
                        />
                    </Col>
                    <Col>
                        <Badge bg={badge}>{props.difficulty}</Badge>
                    </Col>
                    <Col md='auto'>
                        <a className="link" href={props.link}>{props.title}</a>
                    </Col>
                    <Col>
                        <Dropdown as={ButtonGroup}>
                            <Button variant="primary" size="sm">Add to list</Button>

                            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <></>
            </Container>
        </>
    );
}