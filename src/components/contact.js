import React, { Component } from 'react'

export class contact extends Component {
  render() {
    return (
      
      <div id='contactformdiv' style={{marginTop:'20px'}}>
      <form id ='contactForm' method = "POST" data-netlify = "true">
      <input type="hidden" name="form-name" value="contact" />
      <h3 id='getintouch'>Get In Touch</h3>
      <label for="fname">Name</label>
      <input type="text" id="fullname" name="name" placeholder="Your name.."/>
      <label for='email'>Email </label>
      <input type='email' name='email' id='email' placeholder='Your email'/>
      <label for='message'>Message</label>
      <textarea id="message" name="message" placeholder='your message ' style= {{height:'200px'}}></textarea>
      <div data-netlify-recaptcha="true"></div>
      <input type='submit' value='Send Now'/>

      </form>
	  </div>
    )
  }
}

export default contact
