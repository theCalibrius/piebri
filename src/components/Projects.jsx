import React, { Component } from 'react';
// import ProjectModal from './ProjectModal.jsx';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Button } from 'primereact/components/button/Button';
import projectData from '../data/projectData.js'
import '../css/ProjectModal.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import '../css/Projects.css';


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
          right: []
        },
        gitHubURL: '',
        liveURL: '#'
      },
      leftColumnProjects: projectData.leftColumnProjects,
      rightColumnProjects: projectData.rightColumnProjects
    };

    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClick = (projectsColumn, projectIndex, e) => {
    this.setState({
      visible: true,
      modalClass: 'modalWrapper',
      selectedProject: this.state[projectsColumn][projectIndex]
    });
  }

  onHide = (e) => {
    this.setState({
      visible: false,
      modalClass: null
    });
  }

  render() {
    let projectTechnologies = this.state.selectedProject.technologies;

    var getDescription = () => {
      var technologiesListLeftColumn = projectTechnologies.left.map((technology, index) => {
        return (<li key={index} >{technology}</li>);
      });
      var technologiesListCenterColumn = projectTechnologies.center.map((technology, index) => {
        return (<li key={index} >{technology}</li>);
      });
      var technologiesListRightColumn = projectTechnologies.right.map((technology, index) => {
        return (<li key={index} >{technology}</li>);
      });

      return (
        <div className="projectModalContentWrapper">
          <div className="projectDescriptionContent">
            {this.state.selectedProject.description}
          </div>
          <div className="projectTechnologiesList">
            <div className="technologiesListLeftColumn">
              {technologiesListLeftColumn}
            </div>
          <div className="technologiesListCenterColumn">
            {technologiesListCenterColumn}
            </div>
            <div className="technologiesListRightColumn">
              {technologiesListRightColumn}
            </div>
          </div>
        </div>
      );
    };

    var getLinkURL = (linkName) => {
        return (this.state.selectedProject[linkName]);
    }

    getDescription = getDescription.bind(this);
    getLinkURL = getLinkURL.bind(this);

    let footer = <div className="buttonContainer">
                   <Button
                     label="GitHub Repo"
                     onClick={() => {
                       if (getLinkURL('gitHubURL') !== '#') {
                         window.open(getLinkURL('gitHubURL'), "_blank");
                       }
                     }}
                   />
                   <Button
                     label="Live Site"
                     onClick={() => {
                       if (getLinkURL('liveURL') !== '#') {
                         window.open(getLinkURL('liveURL'), "_blank");
                       }
                     }}
                   />
                 </div>
    let leftColumnProjects = this.state.leftColumnProjects;
    let rightColumnProjects = this.state.rightColumnProjects;

    /**
     * Below usage of index as key is appropriate for the situation:
     * https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
     */

    var leftProjects = leftColumnProjects.map((project, index) => {
      let boundProjectClick = this.onClick.bind(this, "leftColumnProjects", index);
      return(
             <li key={index} onClick={boundProjectClick}>
               <span className="projectListItem">
                 {project.title}
               </span>
             </li>
            );
    });

    var rightProjects = rightColumnProjects.map((project, index) => {
      let boundProjectClick = this.onClick.bind(this, "rightColumnProjects", index);
      return(
             <li key={index} onClick={boundProjectClick}>
               <span className="projectListItem">
                 {project.title}
               </span>
             </li>
            );
    });

    return(
      <div className="projectsContent">
        <div className="title">Projects</div>
        <div className="leftProjects">
          {leftProjects}
        </div>
        <div className="rightProjects">
          {rightProjects}
        </div>
        <Dialog className={this.state.modalClass} header={this.state.selectedProject.title} description={this.state.selectedProject.description} visible={this.state.visible} footer={footer} width="450px" height="500px" dismissableMask={true} modal={true} onHide={this.onHide}>
          {getDescription()}
        </Dialog>
      </div>
    );
  }
}


export default Projects;
