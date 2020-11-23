import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <form className="footer-form">
            <h4>Newsletter</h4>
              <input type="email" name="" placeholder="Enter your email" id=""/>
              <button type="submit">Subscribe</button>
            </form>
            <ul>
              <li>About</li>
              <li>Store information</li>
              <li>My account</li>
              <li>Why we choose</li>
            </ul>
          </div>
            <p>Copyright, 2020 All rights reserved, design by <a href="techwithferdin.netlify.app" target="_blank">techwithferdin</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
