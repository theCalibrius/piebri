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
    
    var configureTerminalWindow = () => {
      myTerminal.setBackgroundColor('#FCFCFC');
      myTerminal.setHeight('400px');
      myTerminal.setTextSize('0.9em');
      myTerminal.setTextColor('#232D2D');
    };

    // var promisifiedFunctionCaller = (callbackFunction) => {
    //   return new Promise() {

    //   };
    // }

    var getUserName = () => {
      return new Promise((resolve) => {
        myTerminal.input("Please enter your name: ", (userInput) => {
          myTerminal.confirm("Is this right: " + userInput + " ?", (response) => {
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

    var getUserEmail = () => {
      return new Promise((resolve) => {
        myTerminal.input("Please enter your email: ", (userInput) => {
          myTerminal.confirm("Is this correct " + userInput + " ?", (response) => {
            if (response === true) {
              myTerminal.clear();
              this.setState({email: userInput});
              resolve();
            } else {
              myTerminal.clear();
              getUserEmail().then(resolve);
            }
          });
        });
      });  
    };

    var getUserMessage = () => {
      return new Promise((resolve) => {
        myTerminal.input("Please enter your message: ", (userInput) => {
          myTerminal.confirm("Is this correct " + userInput + " ?", (response) => {
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
      myTerminal.print("Name: " + this.state.name);
      myTerminal.print("Email: " + this.state.email);
      myTerminal.print("Message: " + this.state.message);
      myTerminal.confirm("Send your message?", (response) => {
        if (response === true) {
          myTerminal.clear();
          myTerminal.print("Your message has been sent!");
          sendMessage();
          return;
        } else {
          // re-render the component for a new Terminal session
          console.log('this just before calling render ', this);
          this.render();
        }
      });
    };

    var sendMessage = () => {
      alert("Message Sent: " + "\n" + this.state.name + '\n' + this.state.email + '\n' + this.state.message);
    };

    getUserName = getUserName.bind(this);
    getUserEmail = getUserEmail.bind(this);
    getUserMessage = getUserMessage.bind(this);
    confirmAndSend = confirmAndSend.bind(this);
    sendMessage = sendMessage.bind(this);
   
    var myTerminal = new Terminal();
    $(".terminalEmulator").append(myTerminal.html);
    configureTerminalWindow();
    
    // var gatherDataAndSend = new Promise((resolve) => {
    //   resolve();
    // });


    getUserName().then(getUserEmail).then(getUserMessage).then(confirmAndSend);
  }
    // getUserData = function
      // getUserName() {
        // myTerminal.clear()
        // myTerminal.input("Please enter your full name")
          // myTerminal.confirm("Is this correct")
            // if correct
              // this.setState({ name: userInput})
              // myTerminal.clear()
              // return
            // else
              // myTerminal.clear()
              // return getUserName()
      // }

    


  //   myTerminal.input("What is your full name?", function(userInput) {
  //     myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
  //       if ( response === true ) {
  //         myTerminal.clear();
  //         myTerminal.input("What is your email address?", function(userInput) {
  //           myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
  //             if ( response === true ) {
  //               myTerminal.clear();
  //               myTerminal.input("What is your message?", function(userInput) {
  //                 myTerminal.confirm("Is this correct: " + "\"" + userInput + "\"" + " ?", function(response) {
  //                   if ( response === true ) {
  //                     myTerminal.clear();
  //                   }
  //                 });
  //               });
  //             }
  //           });
  //         });
  //       }
  //     });
  //   });
  // }
  
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
          <div className="terminalEmulator">
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
