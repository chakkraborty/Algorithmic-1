import Nav from "../Navbar/Navbar";
import Container from "react-bootstrap/Container";
import "./listele.css";
import Badge from "react-bootstrap/Badge";
import { Row, Col } from "react-bootstrap"
import { useState } from "react";
export default function ListElement(props) {

    const [badge, setBadeg] = useState("sucess");
    if (props.diffculty === "meduim")
        setBadeg("warning");
    else if (props.difficulty === "hard")
        setBadeg("danger");

    return (
        <>
            <Nav />
            <Container>
                <Row>
                    <Col>
                        <Badge bg={badge}>{props.difficulty}</Badge>
                    </Col>
                    <Col>
                        <h1>{props.title}</h1>
                    </Col>
                </Row>
            </Container>

        </>
    );
}