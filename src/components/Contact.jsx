import React, { Component } from 'react';
import jQuery from 'jquery';
import 'jquery.terminal';

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

  componentWillMount() {
    jQuery(function($, undefined) {
      $('#term_demo').terminal(function(command) {
          if (command !== '') {
              try {
                  var result = window.eval(command);
                  if (result !== undefined) {
                      this.echo(new String(result));
                  }
              } catch(e) {
                  this.error(new String(e));
              }
          } else {
             this.echo('');
          }
      }, {
          greetings: 'Javascript Interpreter',
          name: 'js_demo',
          height: 200,
          prompt: 'js> '
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
          <div id="term_demo" className="terminalEmulator">
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
