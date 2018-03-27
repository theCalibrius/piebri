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
        <div className="projectTitle" title={this.props.selectedProject.title}></div>
        <div className="closeIcon"></div>
        <div className="projectDescription" description={this.props.selectedProject.description}></div>
        <div className="githubButton" gitHubURL={this.props.selectedProject.girHubLink}></div>
        <div className="liveProjectButton" liveURL={this.props.selectedProject.liveURL}></div>
      </div>
      <div className="shadow"></div>
    );
  }
}


export default ProjectModal;
