import React, { Component } from 'react';
import $ from 'jquery';
import Terminal from './terminal.js';
import axios from 'axios';
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
    
    var configureTerminalWindow = () => {
      myTerminal.setBackgroundColor('#FCFCFC');
      myTerminal.setHeight('400px');
      myTerminal.setTextSize('0.9em');
      myTerminal.setTextColor('#232D2D');
    };

    var getUserName = () => {
      return new Promise((resolve) => {
        myTerminal.clear();
        myTerminal.input("Please enter your name: ", (userInput) => {
          myTerminal.confirm("Correct? ", (response) => {
            if (response === true) {
              myTerminal.clear();
              this.setState({name: userInput});
              resolve();
            } else {
              myTerminal.clear();
              getUserName().then(resolve);
            }
          });
        });
      });
    }; 

    var isEmailValid = (addressToValidate) => {
      const access_key = process.env.REACT_APP_API_KEY;
      const api_endpoint = 'http://apilayer.net/api/check?access_key=';
      var email_to_validate = '&email=' + addressToValidate;

      return new Promise((resolve) => {
        axios.post(api_endpoint + access_key + email_to_validate)
        .then((response) => {
          console.log("response: ", response);
          resolve(response.data.format_valid && response.data.mx_found)
        }).catch((error) => {
          console.log(error);
          resolve(true);
        });
      });
    };

    var getUserEmail = () => {
      return new Promise((resolve) => {
        myTerminal.input("Please enter your email: ", (userInput) => {
          isEmailValid(userInput).then((returnValue) => {
            if (returnValue === true) {
              myTerminal.confirm("Correct? ", (response) => {
                if (response === true) {
                  myTerminal.clear();
                  this.setState({email: userInput});
                  resolve();
                } else {
                  myTerminal.clear();
                  getUserEmail().then(resolve);
                }
              });
            } else {
              myTerminal.clear();
              myTerminal.print("Not a valid email address");
              getUserEmail().then(resolve);
            }
          })
        });
      });  
    };

    var getUserMessage = () => {
      return new Promise((resolve) => {
        myTerminal.input("Please enter your message: ", (userInput) => {
          myTerminal.confirm("Correct? ", (response) => {
            if (response === true) {
              myTerminal.clear();
              this.setState({message: userInput});
              resolve();
            } else {
              myTerminal.clear();
              getUserMessage().then(resolve);
            }
          });
        });  
      });
    };

    var confirmAndSend = () => {
      return new Promise((resolve, reject) => {
        myTerminal.print("Name: " + this.state.name);
        myTerminal.print("Email: " + this.state.email);
        myTerminal.print("Message: " + this.state.message);
        myTerminal.confirm("Send your message?", (response) => {
          if (response === true) {
            myTerminal.clear();
            resolve();
          } else {
            reject();
          }
        });
      });
    };


    var sendMessage = () => {
      myTerminal.print("Sending Your Message...");
      axios.post('https://u9udukv8j0.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda', {
        "name": this.state.name,
        "email": this.state.email,
        "message": this.state.message
      }).then((response) => {
        myTerminal.clear();
        myTerminal.print("Your message was succesfully sent.");
        // console.log('response: ', response);
      }).catch((error) => {
        myTerminal.clear();
        myTerminal.print("There was an error sending your message.");
        // console.log('error: ', error);
      })
      
    };

    var gatherDataAndSend = () => {
      getUserName().then(getUserEmail).then(getUserMessage).then(confirmAndSend).then(sendMessage, gatherDataAndSend);
    };

    getUserName = getUserName.bind(this);
    getUserEmail = getUserEmail.bind(this);
    getUserMessage = getUserMessage.bind(this);
    confirmAndSend = confirmAndSend.bind(this);
    sendMessage = sendMessage.bind(this);
    gatherDataAndSend = gatherDataAndSend.bind(this);
   
    var myTerminal = new Terminal();
    $(".terminalEmulator").append(myTerminal.html);
    configureTerminalWindow();
    
    gatherDataAndSend();
    
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
          <div className="terminalEmulator">
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
