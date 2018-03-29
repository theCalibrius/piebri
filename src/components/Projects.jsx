import React, { Component } from 'react';
import ProjectModal from './ProjectModal.jsx';
import '../css/Projects.css';


class Projects extends Component {

  constructor() {
    super();
    this.state = {
      isVisible: false,
      selectedProject: {
        title: 'tableCRM',
        description: 'Table based CRM project built in React',
        gitHubURL: 'http://www.piebri.com',
        liveURL: 'http://www.piebri.com'
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.updateCurrentProject = this.updateCurrentProject.bind(this);
  } 

  toggleModal = (e) => {
    console.log('event: ', e);
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  updateCurrentProject = (projectName) => {
    this.setState({selectedProject: {
        title: 'tableCRM',
        description: 'Table based CRM project built in React',
        gitHubURL: 'http://www.piebri.com',
        liveURL: 'http://www.piebri.com'
    }})
  }

 
  render() {
    return(
      <div className="projectsContent">
        <div className='title'>Projects</div>
        <div className="leftProjects">
            <li onClick={this.toggleModal}>tableCRM</li>
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
        <ProjectModal show={this.state.isVisible}
        onClose={this.toggleModal}
        selectedProject={this.state.selectedProject}>
      </ProjectModal>
      </div>
    );
  }
}


export default Projects;
