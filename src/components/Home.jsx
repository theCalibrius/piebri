import React from 'react';
import ReactDOM from 'react-dom';
import piebri from '../img/piebri.png'


var Home = (props) => (
  <div className="Home">
   <span class="homeText">This is the main page, found in the Home component</span>
   <img class="piebri" src={piebri} alt={"portrait"} />
  </div>
);

export default Home;
