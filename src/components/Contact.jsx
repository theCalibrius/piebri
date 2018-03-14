import React from 'react';
import ReactDOM from 'react-dom';


var Contact = (props) => (
  

      <span>Contact</span>

      <form method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input type="text" placeholder="Name" name="name"/>
        </p>
        <p>
          <input type="email" placeholder="E-mail" name="email"/>
        </p>
        <p>
          <textarea type="text" placeholder="Message" name="message"></textarea>
        </p>
         <p>
          <button type="submit">Submit</button>
        </p>
      </form> 


);

export default Contact;
