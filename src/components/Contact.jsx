import React, { Component } from 'react';
import Terminal from './Terminal.jsx';
import '../css/Contact.css';


class Contact extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="contactContent">
        <div className="title">Contact</div>
        <div className="contactForm">
          <div className="terminalEmulator">
            <Terminal />
          </div>
        </div>
      </div>
    );
  }
}


export default Contact;
