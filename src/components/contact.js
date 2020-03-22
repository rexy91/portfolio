import React, { Component } from 'react'

export class contact extends Component {
  render() {
    return (
      
      // <div id='contactformdiv'>
      // <form id ='contactForm' method = "POST" data-netlify = "true">
      // <h3>Get In Touch</h3>
      // <label for="fname">Name</label>
      // <input type="text" id="fullname" name="fullname" placeholder="Your name.."/>
      // <label for='email'>Email </label>
      // <input type='email' name='email' id='email' placeholder='Your email'/>
      // <label for='message'>Message</label>
      // <textarea id="message" name="message" placeholder='your message ' style= {{height:'200px'}}></textarea>
      // <div data-netlify-recaptcha="true"></div>
      // <input type='submit' value='Send Now'/>
      // </form>
      // </div>
      <div>
<form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </div>
    )
  }
}

export default contact
