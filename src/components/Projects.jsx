import React, { Component } from 'react';
// import ProjectModal from './ProjectModal.jsx';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Button } from 'primereact/components/button/Button';
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
      leftColumnProjects: [
        {
          title: 'tableCRM',
          description: 'tableCRM is a CRM Application with an intuitive, table-based UI.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', 'express', 'webpack', 'aws', '-'],
            center: ['react', 'handsontable', 'highcharts', 'docker', 'REST api'],
            right: ['redux', 'jest/enzyme', 'mysql', 'travisCI', 'ES6']
          },
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://intense-tundra-17858.herokuapp.com/dashboard'
        },
        {
          title: 'noComments',
          description: 'A minimalist social network application.  Mitigates the negatives of social networks by focusing on sharing of ideas and content.  No likes, no messaging, no comments.',
          technologies: {
            left: ['node.js', 'REST api'],
            center: ['angular', 'typescript'],
            right: ['mongodb', '-']
          },
          gitHubURL: 'https://github.com/theCalibrius/nocomments',
          liveURL: '#'
        },
        {
          title: 'pieBri',
          description: 'Personal profile website with a retro UI.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', 'cssGrid', '-'],
            center: ['react', 'ES6', 'flexBox'],
            right: ['lambda', 'aws ses', '-']
          },
          gitHubURL: 'https://github.com/theCalibrius/piebri',
          liveURL: 'http://www.piebri.com'
        },
        {
          title: 'wanderFund',
          description: 'A crowdfunding application for travel that matters.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['PHP', '-'],
            center: ['jQuery', 'sql'],
            right: ['javascript', '-']
          },
          gitHubURL: '#',
          liveURL: 'http://www.wanderfund.com'
        },
        {
          title: 'dlmfIt',
          description: 'A serverless reminder app that sends scheduled SMS notifications to your phone.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', 'angular'],
            center: ['lambda', '-'],
            right: ['aws sns', '-']
          },
          gitHubURL: '#',
          liveURL: '#'
        }
      ],
      rightColumnProjects: [
        {
          title: 'enGauge',
          description: 'Relationship tracker application designed to help people have better relationships.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', 'REST api'],
            center: ['angular', 'typescript'],
            right: ['mongodb', '-']
          },
          gitHubURL: 'https://github.com/theCalibrius/enGauged',
          liveURL: '#'
        },
        {
          title: 'marvelShake',
          description: 'An interactive dance party starring characters from the Marvel universe.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['jQuery'],
            center: ['javascript'],
            right: ['chai/mocha']
          },
          gitHubURL: '#',
          liveURL: '#'
        },
        {
          title: 'fitStop',
          description: 'A fitness application that guides users through timed workouts.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', 'REST api'],
            center: ['react', 'ES6'],
            right: ['mongodb', '-']
          },
          gitHubURL: 'https://github.com/theCalibrius/fit-stop',
          liveURL: 'http://fit-stop.herokuapp.com/'
        },
        {
          title: 'talkRight',
          description: 'A mobile application that makes it easy to check facts relating to common conversation topics.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['node.js', '-'],
            center: ['angular', 'lambda'],
            right: ['ionic', '-']
          },
          gitHubURL: '#',
          liveURL: '#'
        },
        {
          title: 'docAdemy',
          description: 'An innovative online learning platform focused on programming.  This project utilizes various technologies including those below.',
          technologies: {
            left: ['-'],
            center: ['-'],
            right: ['-']
          },
          gitHubURL: '#',
          liveURL: '#'
        }
      ]
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
