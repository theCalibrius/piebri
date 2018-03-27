import React, { Component } from 'react';
import ProjectModal from './ProjectModal.jsx';
import '../css/Projects.css';


class Projects extends Component {

  constructor() {
    super();
    this.state= {
      isVisible: false,
      selectedProject: 'tableCRM'
    };
  } 

  toggleModal = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return(
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
      <ProjectModal show={this.state.isVisible}
        onClose={this.toggleModal}
        selectedProject={this.selectedProject}>
      </ProjectModal>
    );
  }
}


export default Projects;
