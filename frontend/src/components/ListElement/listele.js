import Container from "react-bootstrap/Container";
import "./listele.css";

import { Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import Grid from "./grid_for_element";

export default function ListElement(props) {

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
                                            <h5>{""}</h5>
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