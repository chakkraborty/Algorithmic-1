import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  return (
    <div>
      <Navbar />
      <h6 className="homePageTitle">
        Prepare by Roadmaps and practice problems
      </h6>
      <Container className="rowsClassSubContainer">
        <Row>
          <Col xs className="colsClassSubContainer">
            Basics
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Arrays
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Searching and Sorting
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Binary Search
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Prefix Sum
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Hashmaps
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Strings
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            DFS
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            BFS
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Constructive algorithms
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Stack and queue
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Two Pointers
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Recursion
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Backtracking
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Trees
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Dynamic Programming
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Graphs
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Tries
          </Col>
        </Row>
        <Row>
          <Col xs className="colsClassSubContainer">
            Segment Tree and BIT
          </Col>
          <Col xs={{ order: 12 }} className="colsClassSubContainer">
            Bit masking/manipulations
          </Col>
          <Col xs={{ order: 1 }} className="colsClassSubContainer">
            Greedy
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
