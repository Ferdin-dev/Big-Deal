import React from 'react'

const ContactForm = () => {
  return (
    <>
      <div className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h1>Contact Up</h1>
            <form className="contact-form">
              <input type="text" name="" placeholder="Enter your name" id=""/>
              <input type="email" name="" placeholder="Enter your email" id=""/>
              <textarea name="" placeholder="Your message" id="" cols="30" rows="10"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
