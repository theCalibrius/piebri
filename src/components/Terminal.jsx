import React, { Component } from 'react';

class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      shouldDisplayInputText: ''
    }

    this.getUserName = this.getUserName.bind(this);
    this.getUserEmail = this.getUserEmail.bind(this);
    this.getUserMessage = this.getUserMessage.bind(this);
    this.confirmAndSend = this.confirmAndSend.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.gatherDataAndSend = this.gatherDataAndSend.bind(this);
    this.showCursor = this.showCursor.bind(this);
    this.hideCursor = this.hideCursor.bind(this);
    this.triggerInputFocus = this.triggerInputFocus.bind(this);

  }

  componentDidMount() {
    this.gatherDataAndSend();
  }


/*----------------------------------------------------------------------------*/
/*------------------------ TERMINAL CLASS METHODS ----------------------------*/
/*----------------------------------------------------------------------------*/


  print(message) {
    this.refs.terminalOutput.textContent = message;
  }

  input(message, callback) {
    this.promptInput(message, 'PROMPT_INPUT', callback);
  }

  confirm(message, callback) {
    this.promptInput(message, 'PROMPT_CONFIRM', callback);
  }

  clear() {
    this.refs.terminalOutput.textContent = '';
  }

  sleep(milliseconds, callback) {
    setTimeout(callback, milliseconds);
  }

  // Below is my own custom method
  // blinkingCursor(bool) {
  //   const boolUpperCase = bool.toString().toUpperCase();
  //   this._shouldBlinkCursor = (boolUpperCase === 'TRUE' || boolUpperCase === '1' || boolUpperCase === 'YES');
  // }


/*----------------------------------------------------------------------------*/
/*-------------------------- EVENT HANDLERS ----------------------------------*/
/*----------------------------------------------------------------------------*/


  showCursor() {
    this.refs.hiddenInputField.value = this.refs.visibleUserInput.textContent;
    this.refs.cursor.style.display = 'inline';
  }

  hideCursor() {
    this.refs.cursor.style.display = 'none';
  }

  triggerInputFocus() {
    this.refs.hiddenInputField.focus();
  }

  handleKeyDown(e) {
    if ( e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40 || e.which === 9 ) {
      e.preventDefault();
    } else if ( shouldDisplayInput && e.which !== 13 ) {
      setTimeout( () => {
        this.refs.visibleUserInput.textContent = this.refs.hiddenInputField.value;
      }, 1);
    }
  }

  handleKeyUp(e) {
    let inputValue;

    if ( PROMPT_TYPE === 'PROMPT_CONFIRM' && e.which !== 13 ) {
      this.refs.input.style.display = 'none';
      inputValue = this.refs.hiddenInputField.value;
      this.html.removeChild(inputField);
      if ( typeof(callback) === 'function' ) {
        if ( PROMPT_TYPE === 'PROMPT_CONFIRM' ) {
          callback(inputValue.toUpperCase()[0] === 'Y' ? true : false);
        } else {
          callback(inputValue);
        }
      }
    } else if ( e.which === 13 && this.state.shouldDisplayInputText ) {
      this.refs.input.style.display = 'none';
      inputValue = this.refrs.hiddenInputField.value;
      this.print(inputValue);
      callback(inputValue);
    }
  }

    if ( firstPrompt ) {
      firstPrompt = false;
      setTimeout( () => { inputField.focus();	}, 50)
    } else {
      inputField.focus();
    }
  }



/*----------------------------------------------------------------------------*/
/*------------------------ HELPER FUNCTIONS ----------------------------------*/
/*----------------------------------------------------------------------------*/


  fireCursorBlinkInterval() {
		setTimeout( () => {
				this.refs.cursor.style.visibility = this.refs.cursor.style.visibility === 'visible' ? 'hidden' : 'visible';
				this.fireCursorBlinkInterval();
		}, 500);
	}

  promptInput(message, PROMPT_TYPE, callback) {
    let isInputPrompt = (PROMPT_TYPE === 'PROMPT_INPUT');
    this.setState({
      shouldDisplayInputText: isInputPrompt
    });

		let inputField = ;

		// inputField.style.position = 'absolute';
		// inputField.style.zIndex = '-100';
		// inputField.style.outline = 'none';
		// inputField.style.border = 'none';
		// inputField.style.opacity = '0';
		// inputField.style.fontSize = '0.2em';

		// this._inputLine.textContent = '';
		// this._input.style.display = 'block';
		// this.html.appendChild(inputField);

		this.fireCursorInterval();

		if ( message.length ) {
		  this.print(PROMPT_TYPE === 'PROMPT_CONFIRM' ? message + ' (y/n)' : message);
		}

		// inputField.onblur = function () {
		// 	this._cursor.style.display = 'none';
		// };
    //
		// inputField.onfocus = function () {
		// 	inputField.value = this._inputLine.textContent;
		// 	this._cursor.style.display = 'inline';
		// };
    //
		// this.html.onclick = function () {
		// 	inputField.focus();
		// };

		// inputField.onkeydown = function (e) {
		// 	if ( e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40 || e.which === 9 ) {
		// 		e.preventDefault();
		// 	} else if ( shouldDisplayInput && e.which !== 13 ) {
		// 		setTimeout( () => {
		// 			this._inputLine.textContent = inputField.value;
		// 		}, 1);
		// 	}
		// };

		inputField.onkeyup = function (e) {
			let inputValue;
      if ( PROMPT_TYPE === PROMPT_CONFIRM && e.which !== 13 ) { // if pressed key is not 'ENTER'
        this._input.style.display = 'none';
        inputValue = inputField.value;
        this.html.removeChild(inputField);
        if ( typeof(callback) === 'function' ) {
					if ( PROMPT_TYPE === PROMPT_CONFIRM ) {
						callback(inputValue.toUpperCase()[0] === 'Y' ? true : false);
					} else {
					  callback(inputValue);
					}
				}
      } else if ( e.which === 13 && shouldDisplayInput ) {  // if pressed key is 'ENTER'
        this._input.style.display = 'none';
        inputValue = inputField.value;
        this.print(inputValue);
        callback(inputValue);
      }
		}

		if ( firstPrompt ) {
			firstPrompt = false;
			setTimeout( () => { inputField.focus();	}, 50)
		} else {
			inputField.focus();
		}
	};


/*----------------------------------------------------------------------------*/
/*----------------------------CONTACT FORM METHODS----------------------------*/
/*----------------------------------------------------------------------------*/


getUserName() {
  return new Promise((resolve) => {
    this.clear();
    this.input("Please enter your name: ", (userInput) => {
      this.confirm("Correct? ", (response) => {
        if (response === true) {
          this.clear();
          this.setState({name: userInput});
          resolve();
        } else {
          this.clear();
          getUserName().then(resolve);
        }
      });
    });
  });
}

isEmailValid(addressToValidate) {
  return new Promise((resolve) => {
    axios.post('https://7ljv2tt4yl.execute-api.us-east-1.amazonaws.com/prod/ValidateEmailAddress', {
      address: addressToValidate
    })
    .then((response) => {
      resolve(response.data.format_valid && response.data.mx_found)
    }).catch((error) => {
      resolve(true);
    });
  });
}

getUserEmail() {
  return new Promise((resolve) => {
    this.input("Please enter your email: ", (userInput) => {
      isEmailValid(userInput).then((returnValue) => {
        if (returnValue === true) {
          this.confirm("Correct? ", (response) => {
            if (response === true) {
              this.clear();
              this.setState({email: userInput});
              resolve();
            } else {
              this.clear();
              getUserEmail().then(resolve);
            }
          });
        } else {
          this.clear();
          this.print("Not a valid email address");
          getUserEmail().then(resolve);
        }
      })
    });
  });
}

getUserMessage() {
  return new Promise((resolve) => {
    this.input("Please enter your message: ", (userInput) => {
      this.confirm("Correct? ", (response) => {
        if (response === true) {
          this.clear();
          this.setState({message: userInput});
          resolve();
        } else {
          this.clear();
          getUserMessage().then(resolve);
        }
      });
    });
  });
}

confirmAndSend() {
  return new Promise((resolve, reject) => {
    this.print("Name: " + this.state.name);
    this.print("Email: " + this.state.email);
    this.print("Message: " + this.state.message);
    this.confirm("Send your message?", (response) => {
      if (response === true) {
        this.clear();
        resolve();
      } else {
        reject();
      }
    });
  });
}

sendMessage() {
  this.print("Sending Your Message...");
  axios.post('https://u9udukv8j0.execute-api.us-east-1.amazonaws.com/prod/ContactFormLambda', {
    "name": this.state.name,
    "email": this.state.email,
    "message": this.state.message
  }).then((response) => {
    this.clear();
    this.print("Your message was succesfully sent.");
  }).catch((error) => {
    this.clear();
    this.print("There was an error sending your message.");
  });
}

gatherDataAndSend() {
  getUserName()
  .then(getUserEmail)
  .then(getUserMessage)
  .then(confirmAndSend)
  .then(sendMessage, gatherDataAndSend);
}


/* HOW THE TERMINAL CLASS WORKS
 *  Contact Page instantiates the Terminal class
 *  Terminal constructor instantiates TerminalConstructor class
 *    instance has access to Terminal class methods fireCursorInterval() and promptInput()
 *    and variables firstPrompt and PROMPT_INPUT, PROMPT_PASSWORD, PROMPT_CONFIRM
 *
 *    html elements are created and attached to form the view of TerminalConstructor class instance
 *
 *    function in the React component calls the input() method on the terminal
 *    class which calls the promptInput() helper function which starts the chain
 *    of Promises and terminal prompts
 *
 *
 *
 *
 *
 *
*/

  render() {

    return(
      <div className="terminalWrapper" onClick={this.triggerInputFocus}>
        <div>
          <p className="output">
            <div ref="terminalOutput"></div>
          </p>
          <p ref="input">
            <span className="visibleUserInput" ref="visibleUserInput"></span>
            <span className="cursor" ref="cursor" >C</span>
          </p>
        </div>
        <input
          ref="hiddenInputField"
          onBlur={this.hideCursor}
          onFocus={this.showCursor}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )

  }


}

export default Terminal;
