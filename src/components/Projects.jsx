import React, { Fragment, useState } from 'react';
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

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [modalClass, setModalClass] = useState(null);
  const [selectedProject, setSelectedProject] = useState({
    title: '',
    description: '',
    technologies: { left: [], center: [], right: [] },
    gitHubURL: '',
    liveURL: '#',
  });

  const [leftColumnProjects] = useState(projectData.leftColumnProjects);
  const [rightColumnProjects] = useState(projectData.rightColumnProjects);

  const onClick = (projectsColumn, projectIndex) => {
    setVisible(true);
    setModalClass('modalWraper');
    const list = projectsColumn === 'leftColumnProjects' ? leftColumnProjects : rightColumnProjects;
    setSelectedProject(list[projectIndex]);
  };

  const onHide = () => {
    setVisible(false);
    setModalClass(null);
  };

  const renderList = (columnProjects, columnName) =>
    columnProjects.map((project, index) => (
      <li key={index} onClick={() => onClick(columnName, index)}>
        <span className="projectListItem">{project.title}</span>
      </li>
    ));

  const leftProjects = renderList(leftColumnProjects, 'leftColumnProjects');
  const rightProjects = renderList(rightColumnProjects, 'rightColumnProjects');

  const getModalButtonLinkURL = (linkName) => selectedProject[linkName];
  const getModalFooter = () => {
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

  const getModalDescription = () => {
    const technologiesListLeftColumn = selectedProject.technologies.left.map(
      (technology, index) => {
        return <li key={index}>{technology}</li>;
      }
    );
    const technologiesListCenterColumn = selectedProject.technologies.center.map(
      (technology, index) => {
        return <li key={index}>{technology}</li>;
      }
    );
    const technologiesListRightColumn = selectedProject.technologies.right.map(
      (technology, index) => {
        return <li key={index}>{technology}</li>;
      }
    );

    return (
      <div className="projectModalContentWrapper">
        <div className="projectDescriptionContent">{selectedProject.description}</div>
        <div className="projectTechnologiesList">
          <div className="technologiesListLeftColumn">{technologiesListLeftColumn}</div>
          <div className="technologiesListCenterColumn">{technologiesListCenterColumn}</div>
          <div className="technologiesListRightColumn">{technologiesListRightColumn}</div>
        </div>
      </div>
    );
  };

  return (
    <div id="projectsWrap" className="projectsContent">
      <div className="title">Projects</div>
      <div className="leftProjects">{leftProjects}</div>
      <div className="rightProjects">{rightProjects}</div>
      <Dialog
        className={modalClass}
        header={<HeaderWithClose title={selectedProject.title} onHide={onHide} />}
        description={selectedProject.description}
        visible={visible}
        footer={getModalFooter()}
        width="450px"
        height="500px"
        dismissableMask={true}
        modal={true}
        onHide={onHide}
      >
        {getModalDescription()}
      </Dialog>
    </div>
  );
};

export default Projects;
