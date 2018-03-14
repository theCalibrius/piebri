import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

var Projects = (props) => (
  <Container>  
    <Row className="nameText">
      <Col className="text-center">
      <span>Projects</span>
      </Col>
    </Row> 
    <Row className="projects homeText">
      <Col className="text-center">
      <span>ACCESS DENIED:  Whoops, looks like you're not logged in!</span>
      </Col>
    </Row>   
  </Container>
);

export default Projects;
