import React from 'react';
import piebri from '../img/piebri.png'
import '../css/Home.css';



var Home = (props) => (
  <div className="homepageContent">
	  <div className="title">Brian Pierce</div>
    <div className="leftKeywords">
      <li>node.js</li>
      <li>express.js</li>
      <li>mongodb</li>
      <li>sql</li>
    </div>
    <div className="mugShot">
      <img className="piebri" src={piebri} alt={"Photo of me"} />
    </div>
    <div className="rightKeywords">
      <li>html/css</li>
      <li>javascript</li>
      <li>angular</li>
      <li>react</li>
    </div>
    <div className="bottomKeywords">
    	<li>docker</li>
    	<li>webpack</li>
    	<li>aws</li>
    	<li>git</li>
    </div>
  </div>
);

export default Home;
