import React, { Component } from 'react';
// import ProjectModal from './ProjectModal.jsx';
import { Dialog } from 'primereact/components/dialog/Dialog';
import { Button } from 'primereact/components/button/Button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import '../css/Projects.css';


class Projects extends Component {

  constructor() {
    super();
    this.state = {
      visible: false,
      selectedProject: {
        title: 'tableCRM',
        description: 'Table based CRM project built in React',
        gitHubURL: 'http://www.gitHub.com',
        liveURL: 'http://www.live.com'
      },
      leftColumnProjects: [
        {
          title: 'tableCRM',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'noComments',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'pieBri',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'wanderFund',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'dlmfIt',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        }
      ],
      rightColumnProjects: [
        {
          title: 'enGauge',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'marvelShake',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'fitStop',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'talkRight',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        {
          title: 'docAdemy',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
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
                 
    var getDescription = () => {
      return (this.state.selectedProject.description);
    }

    var getLinkURL = (linkName) => {
        return (this.state.selectedProject[linkName]);
    }

    getDescription = getDescription.bind(this);
    getLinkURL = getLinkURL.bind(this);

    let footer = <div>
                   <Button label="GitHub" onClick={() => {window.open(getLinkURL('gitHubURL'), "_blank")}} icon="fa-check" />
                   <Button label="Live App" onClick={() => {window.open(getLinkURL('liveURL'), "_blank")}} icon="fa-close" />
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
      <Dialog header={this.state.selectedProject.title} description={this.state.selectedProject.description} visible={this.state.visible} footer={footer} width="350px" modal={true} onHide={this.onHide}>
        {getDescription()}
      </Dialog>
      </div>
    );
  }
}


export default Projects;
