import React, { Component, Fragment } from 'react';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Button } from 'primereact/components/button/Button';
import projectData from '../data/projectData.js';
import '../css/ProjectModal.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import '../css/Projects.css';

const HeaderWithClose = ({ title, onHide }) => (
  <Fragment>
    <span id="pr_id_1_label" className="custom-dialog-title">
      {title}
    </span>
    <button type="button" className="s7-close" onClick={onHide} aria-label="Close" title="Close" />
  </Fragment>
);

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      class: null,
      selectedProject: {
        title: '',
        description: '',
        technologies: {
          left: [],
          center: [],
          right: [],
        },
        gitHubURL: '',
        liveURL: '#',
      },
      leftColumnProjects: projectData.leftColumnProjects,
      rightColumnProjects: projectData.rightColumnProjects,
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick = (projectsColumn, projectIndex, e) => {
    this.setState({
      visible: true,
      modalClass: 'modalWrapper',
      selectedProject: this.state[projectsColumn][projectIndex],
    });
  };

  onHide = (e) => {
    this.setState({
      visible: false,
      modalClass: null,
    });
  };

  render() {
    const projectTechnologies = this.state.selectedProject.technologies;
    const leftColumnProjects = this.state.leftColumnProjects;
    const rightColumnProjects = this.state.rightColumnProjects;

    /*
     * Below usage of index as key is appropriate for the situation:
     * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
     */

    const leftProjects = leftColumnProjects.map((project, index) => {
      const boundProjectClick = this.onClick.bind(this, 'leftColumnProjects', index);
      return (
        <li key={index} onClick={boundProjectClick}>
          <span className="projectListItem">{project.title}</span>
        </li>
      );
    });

    const rightProjects = rightColumnProjects.map((project, index) => {
      const boundProjectClick = this.onClick.bind(this, 'rightColumnProjects', index);
      return (
        <li key={index} onClick={boundProjectClick}>
          <span className="projectListItem">{project.title}</span>
        </li>
      );
    });

    let getModalButtonLinkURL = (linkName) => {
      return this.state.selectedProject[linkName];
    };

    let getModalFooter = () => {
      let gitButtonID = '';
      let liveButtonID = '';

      if (getModalButtonLinkURL('gitHubURL') === '#') {
        gitButtonID = 'hideButton';
      }

      if (getModalButtonLinkURL('liveURL') === '#') {
        liveButtonID = 'hideButton';
      }

      return (
        <div className="buttonContainer">
          <Button
            label="GitHub Repo"
            id={gitButtonID}
            onClick={() => {
              window.open(getModalButtonLinkURL('gitHubURL'), '_blank');
            }}
          />
          <Button
            label="Live Site"
            id={liveButtonID}
            onClick={() => {
              window.open(getModalButtonLinkURL('liveURL'), '_blank');
            }}
          />
        </div>
      );
    };

    let getModalDescription = () => {
      const technologiesListLeftColumn = projectTechnologies.left.map((technology, index) => {
        return <li key={index}>{technology}</li>;
      });
      const technologiesListCenterColumn = projectTechnologies.center.map((technology, index) => {
        return <li key={index}>{technology}</li>;
      });
      const technologiesListRightColumn = projectTechnologies.right.map((technology, index) => {
        return <li key={index}>{technology}</li>;
      });

      return (
        <div className="projectModalContentWrapper">
          <div className="projectDescriptionContent">{this.state.selectedProject.description}</div>
          <div className="projectTechnologiesList">
            <div className="technologiesListLeftColumn">{technologiesListLeftColumn}</div>
            <div className="technologiesListCenterColumn">{technologiesListCenterColumn}</div>
            <div className="technologiesListRightColumn">{technologiesListRightColumn}</div>
          </div>
        </div>
      );
    };

    getModalFooter = getModalFooter.bind(this);
    getModalButtonLinkURL = getModalButtonLinkURL.bind(this);
    getModalDescription = getModalDescription.bind(this);

    return (
      <div className="projectsContent">
        <div className="title">Projects</div>
        <div className="leftProjects">{leftProjects}</div>
        <div className="rightProjects">{rightProjects}</div>
        <Dialog
          className={this.state.modalClass}
          header={<HeaderWithClose title={this.state.selectedProject.title} onHide={this.onHide} />}
          description={this.state.selectedProject.description}
          visible={this.state.visible}
          footer={getModalFooter()}
          width="450px"
          height="500px"
          icons="pi-stop"
          dismissableMask={true}
          modal={true}
          onHide={this.onHide}
        >
          {getModalDescription()}
        </Dialog>
      </div>
    );
  }
}

export default Projects;
