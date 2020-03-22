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
							<form action="POST" data-netlify="true">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
									<div class="field">
										<input type="file" name="myfile" id="myfile" placeholder="upload file" rows="7"/>
									</div>
								</div>
								<div data-netlify-recaptcha> </div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>
      </div>
    )
  }
}

export default contact
