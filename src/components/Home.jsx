import React from 'react';
import piebri from '../img/piebri.png';
import '../css/Home.css';

var Home = (props) => (
  <div className="homepageContent">
    <div className="title">Brian Pierce</div>
    <div className="leftKeywords">
      <li>huggingface</li>
      <li>langchain</li>
      <li>python</li>
      <li>genAI</li>
    </div>
    <div className="mugShot">
      <img className="piebri" src={piebri} alt={'my face'} />
    </div>
    <div className="rightKeywords">
      <li>javascript</li>
      <li>html/css</li>
      <li>graphql</li>
      <li>react</li>
    </div>
    <div className="bottomKeywords">
      <li>next.js</li>
      <li>node.js</li>
      <li>UX Design</li>
    </div>
  </div>
);

export default Home;
