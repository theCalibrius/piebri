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


  
  }

  componentDidMount() {

  }


/*----------------------------------------------------------------------------*/
/*------------------------ TERMINAL CLASS METHODS ----------------------------*/
/*----------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------*/
/*------------------------ HELPER METHODS ----------------------------------*/
/*----------------------------------------------------------------------------*/


  f

/*----------------------------------------------------------------------------*/
/*----------------------------CONTACT FORM METHODS----------------------------*/
/*----------------------------------------------------------------------------*/



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
        <div>
          <p className="output" ref="output">
            <span ref="terminalOutput"></span>
          </p>
          <p ref="input">
            <span className="visibleUserInput" ref="visibleUserInput"></span>
            <span className="cursor" ref="cursor" >C</span>
          </p>
        </div>
      </div>
    )
  }


}

export default Terminal;
