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
      allProjects: {
        tableCRM: {
          title: 'tableCRM',
          description: 'Table based CRM project built in React',
          gitHubURL: 'https://github.com/theCalibrius/TableCRM',
          liveURL: 'https://github.com/theCalibrius/TableCRM'
        },
        enGauge: {
          title: 'enGauge',
          description: 'Relationship Tracker',
          gitHubURL: 'https://github.com/theCalibrius/enGauged',
          liveURL: 'https://github.com/theCalibrius/enGauged'
        }
      }
    };

    this.onClick = this.onClick.bind(this);
    // this.updateCurrentProject = this.updateCurrentProject.bind(this);
  } 

  onClick = (e) => {
    console.log('event: ', e);
    this.setState({
      visible: true
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

    return(
      <div className="projectsContent">
        <div className='title'>Projects</div>
        <div className="leftProjects">
            <li onClick={this.onClick}>tableCRM</li>
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
      <Dialog header={this.state.selectedProject.title} description={this.state.selectedProject.description} visible={this.state.visible} footer={footer} width="350px" modal={true} onHide={this.onHide}>
        {getDescription()}
      </Dialog>
      </div>
    );
  }
}


export default Projects;
