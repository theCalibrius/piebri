import React from 'react';
import '../css/Contact.css';


var Contact = (props) => (
  <div className="contact-content">
    <span>Contact</span>

    <form method="post">
      <input type="hidden" name="form-name" value="contact"  />
      <p>
        <input type="text" placeholder="Name" name="Name"/>
      </p>
      <p>
        <input type="email" placeholder="E-mail" name="E-mail"/>
      </p>
      <p>
        <textarea type="text" placeholder="Message" name="Message"></textarea>
      </p>
       <p>
        <button type="submit">Submit</button>
      </p>
    </form> 
  </div>
);

export default Contact;
