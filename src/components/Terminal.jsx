import React, { Component } from 'react';
import axios from 'axios';


class Terminal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      shouldDisplayInputText: '',
      firstPrompt: true
    }


    // this.showCursor = this.showCursor.bind(this);
    // this.hideCursor = this.hideCursor.bind(this);
    // this.triggerInputFocus = this.triggerInputFocus.bind(this);

  }

  componentDidMount() {

    // this.input("Hello", function() {console.log('here it is');})
    // console.log('this: ', this);
    this.getUserName = this.getUserName.bind(this);
    this.getUserEmail = this.getUserEmail.bind(this);
    this.getUserMessage = this.getUserMessage.bind(this);
    this.confirmAndSend = this.confirmAndSend.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.gatherDataAndSend = this.gatherDataAndSend.bind(this);

    this.configureTerminalWindow();
    this.gatherDataAndSend();
    this.fireCursorBlinkInterval();
  }


/*----------------------------------------------------------------------------*/
/*------------------------ TERMINAL CLASS METHODS ----------------------------*/
/*----------------------------------------------------------------------------*/

  configureTerminalWindow() {
    this.setBackgroundColor('#FCFCFC');
    this.setHeight('400px');
    this.setTextSize('0.9em');
    this.setTextColor('#232D2D');
    this.setBorder('thin', 'solid', 'black', '4px');
    this.setLineHeight('160%');
  }

  setTextSize(size) {
    this.refs.output.style.fontSize = size;
    this.refs.input.style.fontSize = size;
  }

  setTextColor(col) {
    this.refs.terminalWrapper.style.color = col;
    this.refs.cursor.style.background = col;
  }

  setBackgroundColor(col) {
    this.refs.terminalWrapper.style.background = col;
  }

  setWidth(width) {
    this.refs.terminalWrapper.style.width = width;
  }

  setHeight(height) {
    this.refs.terminalWrapper.style.height = height;
  }

  setLineHeight(lineHeight) {
    this.refs.terminalWrapper.style.lineHeight = lineHeight;
  }

  setBorder(size, style, color, radius) {
    this.refs.terminalWrapper.style.border = size + ' ' + style + ' ' + color;
		this.refs.terminalWrapper.style.borderRadius = radius;
  }

  print(message) {
    const newLine = document.createElement('span');
    const lineBreak = document.createElement('br');
    newLine.textContent = message;
    this.refs.output.appendChild(newLine);
    this.refs.output.appendChild(lineBreak);
  }

  input(message, callback) {
    this.promptInput(message, 'PROMPT_INPUT', callback);
  }

  confirm(message, callback) {
    this.promptInput(message, 'PROMPT_CONFIRM', callback);
  }

  clear() {
    this.refs.output.innerHTML = '';
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
/*------------------------ HELPER METHODS ----------------------------------*/
/*----------------------------------------------------------------------------*/


  fireCursorBlinkInterval() {
		setTimeout( () => {
				this.refs.cursor.style.visibility = this.refs.cursor.style.visibility === 'visible' ? 'hidden' : 'visible';
				this.fireCursorBlinkInterval();
		}, 500);
	}

  promptInput(message, PROMPT_TYPE, callback) {
    let isInputPrompt = (PROMPT_TYPE === 'PROMPT_INPUT');
    let hiddenInputField = document.createElement('input');


    this.setState({
      shouldDisplayInputText: isInputPrompt
    });

		hiddenInputField.style.position = 'absolute';
		hiddenInputField.style.zIndex = '-100';
		hiddenInputField.style.outline = 'none';
		hiddenInputField.style.border = 'none';
		hiddenInputField.style.opacity = '0';
		hiddenInputField.style.fontSize = '0.2em';

		this.refs.visibleUserInput.textContent = '';
		this.refs.input.style.display = 'block';
    this.refs.terminalWrapper.appendChild(hiddenInputField);

		// this.fireCursorBlinkInterval();

		if ( message.length ) {
		  this.print(PROMPT_TYPE === 'PROMPT_CONFIRM' ? message + ' (y/n)' : message);
		}

		hiddenInputField.onblur = () => {
			this.refs.cursor.style.display = 'none';
		};

		hiddenInputField.onfocus = () => {
			hiddenInputField.value = this.refs.visibleUserInput.textContent;
			this.refs.cursor.style.display = 'inline';
		};

		this.refs.terminalWrapper.onclick = () => {
			hiddenInputField.focus();
		};

		hiddenInputField.onkeydown = (e) => {
			if ( e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40 || e.which === 9 ) {
				e.preventDefault();
			} else if ( this.state.shouldDisplayInputText && e.which !== 13 ) {
				setTimeout( () => {
					this.refs.visibleUserInput.textContent = hiddenInputField.value;
				}, 1);
			}
		};

		hiddenInputField.onkeyup = (e) => {
			let inputValue;
      if ( PROMPT_TYPE === 'PROMPT_CONFIRM' && e.which !== 13 ) { // if pressed key is not 'ENTER'
        this.refs.input.style.display = 'none';
        inputValue = hiddenInputField.value;
        this.refs.terminalWrapper.removeChild(hiddenInputField);
        if ( typeof(callback) === 'function' ) {
					if ( PROMPT_TYPE === 'PROMPT_CONFIRM' ) {
						callback(inputValue.toUpperCase()[0] === 'Y' ? true : false);
					} else {
					  callback(inputValue);
					}
				}
      } else if ( e.which === 13 && this.state.shouldDisplayInputText ) {  // if pressed key is 'ENTER'
        this.refs.input.style.display = 'none';
        inputValue = hiddenInputField.value;
        this.print(inputValue);
        callback(inputValue);
      }
		}

		if ( this.state.firstPrompt ) {
			this.setState({
        firstPrompt: false
      })
			setTimeout( () => { hiddenInputField.focus();	}, 50)
		} else {
			hiddenInputField.focus();
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
          this.getUserName().then(resolve);
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
      const alertValidating = document.createElement('span');
      alertValidating.textContent = 'validating...'
      this.refs.output.appendChild(alertValidating);
      this.isEmailValid(userInput).then((returnValue) => {
        this.refs.output.removeChild(alertValidating);
        if (returnValue === true) {
          this.confirm("Correct? ", (response) => {
            if (response === true) {
              this.clear();
              this.setState({email: userInput});
              resolve();
            } else {
              this.clear();
              this.getUserEmail().then(resolve);
            }
          });
        } else {
          this.clear();
          this.print("Not a valid email address");
          this.getUserEmail().then(resolve);
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
          this.getUserMessage().then(resolve);
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
    this.print("--------------------");
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
  this.getUserName()
  .then(this.getUserEmail)
  .then(this.getUserMessage)
  .then(this.confirmAndSend)
  .then(this.sendMessage, this.gatherDataAndSend);
}

/*----------------------------------------------------------------------------*/
/*-------------------------- EVENT HANDLERS ----------------------------------*/
/*----------------------------------------------------------------------------*/


  // showCursor() {
  //   this.refs.hiddenInputField.value = this.refs.visibleUserInput.textContent;
  //   this.refs.cursor.style.display = 'inline';
  // }
  //
  // hideCursor() {
  //   this.refs.cursor.style.display = 'none';
  // }
  //
  // triggerInputFocus() {
  //   this.refs.hiddenInputField.focus();
  // }
  //
  // handleKeyDown(e) {
  //   if ( e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40 || e.which === 9 ) {
  //     e.preventDefault();
  //   } else if ( shouldDisplayInput && e.which !== 13 ) {
  //     setTimeout( () => {
  //       this.refs.visibleUserInput.textContent = this.refs.hiddenInputField.value;
  //     }, 1);
  //   }
  // }
  //
  // handleKeyUp(e) {
  //   let inputValue;
  //
  //   if ( PROMPT_TYPE === 'PROMPT_CONFIRM' && e.which !== 13 ) {
  //     this.refs.input.style.display = 'none';
  //     inputValue = this.refs.hiddenInputField.value;
  //     this.html.removeChild(inputField);
  //     if ( typeof(callback) === 'function' ) {
  //       if ( PROMPT_TYPE === 'PROMPT_CONFIRM' ) {
  //         callback(inputValue.toUpperCase()[0] === 'Y' ? true : false);
  //       } else {
  //         callback(inputValue);
  //       }
  //     }
  //   } else if ( e.which === 13 && this.state.shouldDisplayInputText ) {
  //     this.refs.input.style.display = 'none';
  //     inputValue = this.refrs.hiddenInputField.value;
  //     this.print(inputValue);
  //     callback(inputValue);
  //   }
  // }
  //
  //   if ( firstPrompt ) {
  //     firstPrompt = false;
  //     setTimeout( () => { inputField.focus();	}, 50)
  //   } else {
  //     inputField.focus();
  //   }
  // }

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
      <div className="terminalWrapper" ref="terminalWrapper">
        <div className="innerWrapper">
          <p className="output" ref="output"></p>
          <p className="input" ref="input">
            <span className="visibleUserInput" ref="visibleUserInput"></span>
            <span className="cursor" ref="cursor" >C</span>
          </p>
        </div>
      </div>
    )
  }


}

export default Terminal;
