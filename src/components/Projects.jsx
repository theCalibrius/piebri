import React from 'react';
import '../css/Projects.css';


var Projects = (props) => (
  <div className="projectsContent">
    <div className='title'>Projects</div>
    <div className="leftProjects">
        <li>tableCRM</li>
        <li>noComments</li>
        <li>pieBri</li>
        <li>wanderFund</li>
        <li>dlmfIt</li>
    </div>
    <div className="rightProjects">
        <li>enGauge</li>
        <li>marvelShake</li>
        <li>fitStop</li>
        <li>talkRight</li>
        <li>docAdemy</li>
    </div>
  </div>
);

export default Projects;
