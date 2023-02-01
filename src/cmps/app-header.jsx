import React from "react"

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="nav-container">
        <div className="nav-header">
          <div className="logo">
            <a className="logo" href="#">
              myteam
            </a>
          </div>
          <div className="nav-links">
            <a href="#">home</a>
            <a href="#">about</a>
          </div>
        </div>
        <div className="contact-us">
          <a href="">contact us</a>
        </div>
      </div>
      <div className="header-main-content">
        <div className="header-title">
          <h1>
            Find the best <span>talent</span>
          </h1>
        </div>
        <div className="header-content">
          <span className="blue-line"></span>
          <p>
            Find thebest talent Finding the right people and building high
            performing teams can be hard. Most companies aren’t tapping into the
            abundance of global talent. We’re about to change that.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AppHeader
