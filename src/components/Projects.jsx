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
      selectedProject: {
        title: '',
        description: '',
        technologies: [],
        gitHubURL: '',
        liveURL: '#'
      },
      leftColumnProjects: [
        {
          title: 'tableCRM',
          description: 'CRM Application with an intuitive, table-based UI',
          technologies: ['node.js', 'express', 'webpack', 'react', 'handsontable', 'highcharts', 'redux', 'jest', 'enzyme', 'mysql'],
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: '#'
        },
        {
          title: 'noComments',
          description: 'A minimalist social network application for sharing and viewing content.  Designed to mitigate the negative characteristics of social networks by focusing on sharing of ideas and content.  No likes, no messaging, no comments.',
          gitHubURL: 'https://github.com/theCalibrius/nocomments',
          liveURL: '#'
        },
        {
          title: 'pieBri',
          description: 'Personal profile website with a retro UI.',
          gitHubURL: 'https://github.com/theCalibrius/piebri',
          liveURL: 'http://www.piebri.com'
        },
        {
          title: 'wanderFund',
          description: 'A crowdfunding application for travel that matters',
          gitHubURL: '#',
          liveURL: 'http://www.wanderfund.com'
        },
        {
          title: 'dlmfIt',
          description: 'A serverless reminder app that sends scheduled SMS notifications to your phone',
          gitHubURL: '#',
          liveURL: '#'
        }
      ],
      rightColumnProjects: [
        {
          title: 'enGauge',
          description: 'Relationship tracker application designed to help people have better relationships.',
          gitHubURL: 'https://github.com/theCalibrius/enGauged',
          liveURL: '#'
        },
        {
          title: 'marvelShake',
          description: 'An interactive dance party starring characters from the Marvel universe.',
          gitHubURL: '#',
          liveURL: '#'
        },
        {
          title: 'fitStop',
          description: 'A fitness application that guides users through timed workouts',
          gitHubURL: 'https://github.com/theCalibrius/fit-stop',
          liveURL: 'http://fit-stop.herokuapp.com/'
        },
        {
          title: 'talkRight',
          description: 'A mobile application that makes it easy to check facts relating to common conversation topics.',
          gitHubURL: '#',
          liveURL: '#'
        },
        {
          title: 'docAdemy',
          description: 'An innovative online learning platform focused on programming.',
          gitHubURL: '#',
          liveURL: '#'
        }
      ]
    };

    this.onClick = this.onClick.bind(this);
    // this.updateCurrentProject = this.updateCurrentProject.bind(this);
  } 

  onClick = (projectsColumn, projectIndex, e) => {
    console.log('event: ', e);
    console.log('index': projectIndex);
    console.log('column': projectsColumn);
    this.setState({
      visible: true,
      selectedProject: this.state[projectsColumn][projectIndex]
    });
  }

  onHide = (e) => {
    console.log('onHide event: ', e);
    this.setState({
      visible: false
    });
  }

  openLink = (e) => {
    console.log('openLink event: ', e);
    // window.open(this.state.currentProject[e]);
  }

  // updateCurrentProject = (projectName) => {
  //   this.setState({selectedProject: {
  //       title: 'tableCRM',
  //       description: 'Table based CRM project built in React',
  //       gitHubURL: 'http://www.piebri.com',
  //       liveURL: 'http://www.piebri.com'
  //   }})
  // }

 
  render() {
    let projectTechnologies = this.state.selectedProject.technologies;
    var getDescription = () => {
        var technologiesList = projectTechnologies.map((technology, index) => {
        return (<li key={index} >{technology}</li>);
      });
      return (
        <div className="projectModalContentWrapper">
          <p className="descriptionHeader">Description:</p>
          <p className="projectDescriptionContent">
            {this.state.selectedProject.description}
            <hr />
          </p>
          <div className="projectTechnologiesList">
            {technologiesList}
          </div>
        </div>


      );
    }

    var getLinkURL = (linkName) => {
        return (this.state.selectedProject[linkName]);
    }

    getDescription = getDescription.bind(this);
    getLinkURL = getLinkURL.bind(this);

    let footer = <div className="buttonContainer">
                   <Button label="GitHub Repo" onClick={() => {window.open(getLinkURL('gitHubURL'), "_blank")}}  />
                   <Button label="Live Site" onClick={() => {window.open(getLinkURL('liveURL'), "_blank")}}  />
                 </div>
    let leftColumnProjects = this.state.leftColumnProjects;
    let rightColumnProjects = this.state.rightColumnProjects;
    
     var leftProjects = leftColumnProjects.map((project, index) => {
        let boundProjectClick = this.onClick.bind(this, "leftColumnProjects", index);
        return (<li key={index} onClick={boundProjectClick}>{project.title}</li>);
      });

     var rightProjects = rightColumnProjects.map((project, index) => {
        let boundProjectClick = this.onClick.bind(this, "rightColumnProjects", index);
        return (<li key={index} onClick={boundProjectClick}>{project.title}</li>);
      });

    return(
      <div className="projectsContent">
        <div className='title'>Projects</div>
        <div className="leftProjects">
          {leftProjects}
        </div>
        <div className="rightProjects">
          {rightProjects}
        </div>
      <Dialog header={this.state.selectedProject.title} description={this.state.selectedProject.description} visible={this.state.visible} footer={footer} width="450px" height="500px" dismissableMask="true" modal={true} onHide={this.onHide}>
        {getDescription()}
      </Dialog>
      </div>
    );
  }
}


export default Projects;
