import React from "react"
import twitter from "../assets/images/twitter.png"
import facebook from "../assets/images/facebook.png"
import pintrest from "../assets/images/pintrest.png"

const AppFooter = () => {
  return (
    <div className="footer">
      <footer className="footer-conatiner">
        <section className="contact-us">
          <p className="contact-title">Ready to get started?</p>
          <button>contact us</button>
        </section>
      </footer>
      <section className="myteam-info">
        <div className="myteam-container">
          <div className="left">
            <div className="logo">
              <p>myteam</p>
            </div>
            <div className="links">
              <a href="#">home</a>
              <a href="#">about</a>
            </div>
          </div>
          <div className="mid">
            <span>987 Hillcrest Lane</span>
            <span>Irvine, CA</span>
            <span>California 92714</span>
            <span>Call Us : 949-833-7432</span>
          </div>
          <div className="right">
            <div className="social-links">
              <img src={facebook} alt="" />
              <img src={pintrest} alt="" />
              <img src={twitter} alt="" />
            </div>
            <div className="copy-right">
              Copyright 2020. All rights reserved
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppFooter
