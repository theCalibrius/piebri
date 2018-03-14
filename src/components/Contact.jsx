import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'reactstrap';

var Contact = (props) => (
  <Container>  
    <Row className="nameText">
      <Col className="text-center">
      <span>Contact</span>
      </Col>
    </Row>  
    <Row className="contactForm">
      <Col className="text-center"> 
      <form method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" placeholder="Name" name="name"/>
        </p>
        <p>
          <input type="email" placeholder="E-mail" name="email"/>
        </p>
        <p>
          <textarea type="text" placeholder="Message" name="message"></textarea>
        </p>
         <p>
          <button type="submit">Submit</button>
        </p>
      </form> 
      </Col>
    </Row>
  </Container>

);

export default Contact;
