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
        gitHubURL: 'http://www.piebri.com',
        liveURL: 'http://www.piebri.com'
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

  // updateCurrentProject = (projectName) => {
  //   this.setState({selectedProject: {
  //       title: 'tableCRM',
  //       description: 'Table based CRM project built in React',
  //       gitHubURL: 'http://www.piebri.com',
  //       liveURL: 'http://www.piebri.com'
  //   }})
  // }

 
  render() {
    let footer = <div>
                   <Button label="Yes" icon="fa-check" />
                   <Button label ="No" icon="fa-close" />
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
      <Dialog header="My Project" visible={this.state.visible} footer={footer} width="350px" modal={true} onHide={this.onHide}>
        This is where I describe the project
      </Dialog>
      </div>
    );
  }
}


export default Projects;
