import Container from "react-bootstrap/Container";
import "./listele.css";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import { Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import Accordion from 'react-bootstrap/Accordion';

import FormControlLabel from '@mui/material/FormControlLabel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Grid from "./grid_for_element";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ListElement(props) {

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
                <Row className="justify-content-md-center" lg={2}>
                    <Accordion bsPrefix="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>

                                <h1 className="title">{props.topic}</h1>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Container>
                                    <Row>
                                        <Col className="justify-content-center">
                                            <h5>Status</h5>
                                        </Col>
                                        <Col>
                                            <h5>Difficulty</h5>
                                        </Col>
                                        <Col>
                                            <h5>Problem</h5>
                                        </Col>
                                        <Col>
                                            <h5></h5>
                                        </Col>
                                    </Row>
                                    <></>
                                </Container>
                                <Grid difficulty={props.difficulty} title={props.title} link={props.link} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </>
    );
}