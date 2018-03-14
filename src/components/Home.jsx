import React from 'react';
import ReactDOM from 'react-dom';
import piebri from '../img/piebri.png'
import { Container, Row, Col } from 'reactstrap';


var Home = (props) => (
	<Container>  
	  <Row className="nameText">
	    <Col className="text-center">
	    <span>Brian Pierce</span>
	    </Col>
	  </Row>
	  <Row>
	   <Col xs="3" className="text-right">
	     <ul class="homeText keywords left">
	     <li>node.js</li>
	     <li>express.js</li>
	     <li>mongodb</li>
	     <li>sql</li>
	     </ul>
	   </Col>
	   <Col xs="6" className="text-center">
	     <img class="piebri" src={piebri} alt={"portrait"} />
	   </Col>
	   <Col xs="3" className="text-left">
	     <ul class="homeText keywords right">
	     <li>html/css</li>
	     <li>javascript</li>
	     <li>angular</li>
	     <li>react</li>
	     </ul>
	   </Col>
	  </Row>
	  <Row>
	    <Col xs="3">
	    </Col>
	    <Col xs="6" className="text-center">
	      <ul class="homeText keywords bottom">
	        <li>docker</li>
	        <li>webpack</li>
	        <li>aws</li>
	        <li className="final">git</li>
	      </ul>
	   </Col>
	   <Col xs="3">   
	   </Col>
	  </Row>
	</Container>
);

export default Home;