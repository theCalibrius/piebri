import React, { Component } from 'react';
import '../css/ProjectModal.css';

var ProjectModal = (props) => {
      <div className="modalWrapper">
          <div className="shadow"></div>
          <div className="modal">
            <div className="titleArea">
              <div className="projectTitle" title={this.props.selectedProject.title}>{this.title}</div>
              <div className="closeIcon" onClick={this.props.onClose}></div>
            </div>
            <div className="projectDescription" description={this.props.selectedProject.description}> </div>
            <div className="buttonArea">
              <button className="gitHubButton" gitHubURL={this.props.selectedProject.gitHubURL}>gitHubLink</button>
              <button className="liveProjectButton" liveURL={this.props.selectedProject.liveURL}>liveProjectLink</button>
            </div>
          </div>
          <div className="shadow"></div>
      </div>
}


export default ProjectModal;