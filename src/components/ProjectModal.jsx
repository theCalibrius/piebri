import React, { Component } from 'react';


class ProjectModal extends Component {
  constructor() {
    super()
    this.state = {
      selectedProject: {}
      showModal: false
    }
  }

  render() {
    return(
      <div className="modal">
        <div className="projectTitle" title={this.state.selectedProject.title}></div>
        <div className="closeIcon"></div>
        <div className="projectDescription" description={this.state.selectedProject.description}></div>
        <div className="githubButton" gitHubURL={this.state.selectedProject.girHubLink}></div>
        <div className="liveProjectButton" liveURL={this.state.selectedProject.liveURL}></div>
      </div>
      <div className="shadow"></div>
    );
  }
}


export default ProjectModal;
