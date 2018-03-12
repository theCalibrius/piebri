import React from 'react';
import ReactDOM from 'react-dom';

var Contact = (props) => (
  <div className="Contact">
    <form method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>Name: <input type="text" name="name"/></label>
      </p>
      <p>
      	<label>Email: <input type="email" name="email"/></label>
      </p>
      <p>
      	<label>Message: <textarea type="text" name="message"></textarea></label>
      </p>
       <p>
      	<button type="submit">Submit</button>
      </p>
    </form>  
  </div>
);

export default Contact;
