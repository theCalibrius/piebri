import React from 'react';
import ReactDOM from 'react-dom';
import piebri from '../img/piebri.png'



var Home = (props) => (
 
	<span>Brian Pierce</span>

	<ul class="homeText keywords left">
		<li>node.js</li>
		<li>express.js</li>
		<li>mongodb</li>
		<li>sql</li>
	</ul>
	  
	<img class="piebri" src={piebri} alt={"portrait"} />

	 <ul class="homeText keywords right">
	     <li>html/css</li>
	     <li>javascript</li>
	     <li>angular</li>
	     <li>react</li>
	 </ul>
	
	  
	<ul class="homeText keywords bottom">
		<li>docker</li>
		<li>webpack</li>
		<li>aws</li>
		<li className="final">git</li>
	</ul>

);

export default Home;