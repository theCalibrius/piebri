import React from 'react';
import ReactDOM from 'react-dom';
import piebri from '../img/piebri.png'



var Home = (props) => (
  <div className="homepageContent">
	  <div className='title'>Brian Pierce</div>
    <div className="leftKeywords">
        <li>node.js</li>
        <li>express.js</li>
        <li>mongodb</li>
        <li>sql</li>
    </div>
    <div className="mugShot">
      <img class="piebri" src={piebri} alt={"portrait"} />
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