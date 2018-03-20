import React, { Component } from 'react';
import $ from 'jquery';
import Terminal from './terminal.js';
import '../css/Contact.css';


class Contact extends Component {
  constructor() {
    super();
    this.state= {
      nameRight: false,
      emailRight: false,
      messageRight: false,
      name: '',
      email: '',
      message: ''
    }
  }

  componentDidMount() {
    var myTerminal = new Terminal();
    $(".terminalEmulator").append(myTerminal.html);
    myTerminal.setBackgroundColor('#FCFCFC');
    myTerminal.setHeight('400px');
    myTerminal.setTextSize('0.9em');
    myTerminal.setTextColor('#232D2D');
    myTerminal.input("What is your full name?", function(userInput) {
      myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
        if ( response === true ) {
          myTerminal.clear();
          myTerminal.input("What is your email address?", function(userInput) {
            myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
              if ( response === true ) {
                myTerminal.clear();
                myTerminal.input("What is your message?", function(userInput) {
                  myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
                    if ( response === true ) {
                      myTerminal.clear();
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
  }
  
  // var getName = () => {
  //   myTerminal.input("What is your full name?", function (userInput) {
  //     myTerminal.confirm("Is this correct?")
  //   })
  // }

  // getName
    // myTerminal.input('')
    // if nameRight === true && nameText.length > 1
      // this.state.name = nameText
      // myTerminal.clear()
      // getEmail
    // else
      // getName()
  
  // getEmail

  // getMessage

  // confirmAndSend

  // displaySendConfirmation



  // getName()
  // myTerminal.clear()
  // getEmail()
  // myTerminal.clear()
  // getMessage()
  // myTerminal.clear()
  // confirmAndSend()
  // myTerminal.clear()
  // displaySendConfirmation()

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
