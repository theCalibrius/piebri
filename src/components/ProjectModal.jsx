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
      <div className="modal" isVisible={this.state.isVisible}>
        <div className="titleArea">
          <div className="projectTitle" title={this.props.selectedProject.title}></div>
          <div className="closeIcon"></div>
        </div>
        <div className="projectDescription" description={this.props.selectedProject.description}></div>
        <div className="buttonArea">
          <button className="gitHubButton" gitHubURL={this.props.selectedProject.gitHubURL}></button>
          <button className="liveProjectButton" liveURL={this.props.selectedProject.liveURL}></button>
        </div>
      </div>
      <div className="shadow"></div>
    );
  }
}


export default ProjectModal;
