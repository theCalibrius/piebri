import React, { Component } from 'react';
import $ from 'jquery';
import Terminal from './terminal.js';
import '../css/Contact.css';


class Contact extends Component {
  constructor() {
    super();
    this.state= {
      name: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    var myTerminal = new Terminal();
    $(".terminalEmulator").append(myTerminal.html);
    myTerminal.setBackgroundColor('#232D2D');
    myTerminal.setHeight('400px');
    myTerminal.input("What is your full name?", function (userInput) {
      myTerminal.print("Thank you, " + userInput + "!");
      myTerminal.input("What is your email address?", function (userInput) {
        myTerminal.print("Is this correct?: " + userInput + "!");
        myTerminal.input("What message would you like to send?", function (userInput) {
          myTerminal.print("Is this correct?: " + userInput + "!");
        });
      });
    });
  }


  render() {
    return(
      <div className="contactContent">
        <div className="title">Contact</div>
        <div className="contactForm">
          <form name="contactForm" netflify netlify-honeypot="bot-field" method="post">
            <div className="contactFormFields">
              <input type="hidden" name="form-name" value="contact"  />
              <input type="text" placeholder="name~: " name="Name"/>
              <input type="email" placeholder="e-mail~: " name="E-mail"/>
              <textarea type="text" placeholder="message~: " name="Message"></textarea>
              <button type="submit">Submit</button>
            </div>
          </form> 
          <div  className="terminalEmulator">
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
