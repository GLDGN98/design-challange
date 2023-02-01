import React from "react"
import shape1 from "../assets/images/Shape1.png"
import shape2 from "../assets/images/Shape2.png"
import shape3 from "../assets/images/Shape3.png"
import oval from "../assets/images/Oval.png"
import arthur from "../assets/images/avatar-arthur.jpg"
import aiysha from "../assets/images/avatar-aiysha.jpg"
import kady from "../assets/images/avatar-kady.jpg"

const Home = () => {
  return (
    <div className="home-cantainer">
      <section className="section-1">
        <div className="container">
          <div className="home-title">
            <span className="rectangle"></span>
            <p className="home-main-title">
              Build & manage distributed teams like no one else.
            </p>
          </div>
          <div className="home-content">
            <div className="line-1">
              <img className="shape" src={shape1} alt="" />
              <img className="oval" src={oval} alt="" />
              <div className="p-1">
                <span>Experienced Invdividuals</span>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="line-2">
              <img className="shape" src={shape2} alt="" />
              <img className="oval" src={oval} alt="" />
              <div className="p-2">
                <span>Easy to implement</span>
                <p>
                  Our processes have been refined over years of impementation
                  meaning our teams always deliver.
                </p>
              </div>
              <div className="line-3">
                <img className="shape" src={shape3} alt="" />
                <img className="oval" src={oval} alt="" />
                <div className="p-3">
                  <span>Enhanced Productivity</span>
                  <p>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="section-2-title">
            <h1>
              Delivering real results for top companies. Some of our
              <span> success stories.</span>
            </h1>
            <div className="people-stories">
              <div className="person-1-story">
                <p>
                  “The team perfectly fit the specialized skill set required.
                  They focused on the most essential features helping us launch
                  the platform eight months faster than planned.”
                </p>
                <div className="person-1-info">
                  <span className="people-name">Kady Baker</span>
                  <p className="people-position">Product Manager at Bookmark</p>
                  <img src={kady} alt="" />
                </div>
              </div>

              <div className="person-2-story">
                <p>
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live,
                  user retention has gone through the roof!”
                </p>
                <div className="person-2-info">
                  <span className="people-name">Aiysha Reese</span>
                  <p className="people-position">Founder of Manage</p>
                  <img src={aiysha} alt="" />
                </div>
              </div>

              <div className="person-3-story">
                <p>
                  “We needed to automate our entire onboarding process. The team
                  came in and built out the whole journey. Since going live,
                  user retention has gone through the roof!”
                </p>
                <div className="person-3-info">
                  <span className="people-name">Arthur Clarke</span>
                  <p className="people-position">Co-founder of MyPhysio</p>
                  <img src={arthur} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
