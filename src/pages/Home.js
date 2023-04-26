import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import myDrawing from '../assets/images/myDrawing.gif';
import work1 from '../assets/images/jaceScreenshot.jpg';

export default function Home() {


  return (
    <section>
      <div className="home-banner">
        <div className="home-banner-left">
          <h1>Software Engineer</h1>
          <p>Focused on building and maintenaing Hardware, Web Applications and Databases. Experienced in leading teams to complete projects on time and in budget.</p>
        </div>
        <div className="home-banner-right">
          <img className="home-banner-img" src={myDrawing} alt="drawing of me" />
        </div>
      </div>
      <div className="home-banner-about">
        <div className="home-banner-about-left">
          <h1>About</h1>
          <p>Hi, my name is Cezar Amaral.</p>
          <p>Since beginning my journey as Software Engineer in the late 90's,
            I acquired experience in design, debug and develop software while
            managing projects and campaigns.</p>
        </div>
        <a href={`#/home/27`} className="home-banner-about-right">
          <div className="home-skills">
            <h2 className="skills">my skills</h2>
            <h2 className="skills-right"><p className='oval'></p></h2>
          </div>
          <div className="home-list-skills">
            <li className="home-list-skills-item">HTML</li>
            <li className="home-list-skills-item">CSS</li>
            <li className="home-list-skills-item">JavaScript</li>
            <li className="home-list-skills-item">React</li>
            <li className="home-list-skills-item">Node.js</li>
            <li className="home-list-skills-item">Express</li>
            <li className="home-list-skills-item">OOP</li>
            <li className="home-list-skills-item">MySQL</li>
            <li className="home-list-skills-item">MongoDB</li>
            <li className="home-list-skills-item">MVC</li>
            <li className="home-list-skills-item">MERN</li>
            <li className="home-list-skills-item">Handlebars</li>
            <li className="home-list-skills-item">JQuery</li>
            <li className="home-list-skills-item">JSON</li>
            <li className="home-list-skills-item">ArduinoIDE</li>
            <li className="home-list-skills-item">Git</li>
            <li className="home-list-skills-item">GraphQL</li>
            <li className="home-list-skills-item">SaaS</li>
            <li className="home-list-skills-item">AWS</li>
            <li className="home-list-skills-item">Agile</li>


          </div>
        </a>
      </div>
      <div name="work" className="home-subtitle">
        RecentWork
      </div>
      <div className="work-container">
        <a href="https://jace1971.herokuapp.com/" className="work-container-left">
          <img className="work-img" src={work1} alt="drawing of me" />
          <div className="work-overlay"></div>
        </a>
        <div className="work-container-right">
          <div className="work-tag">
            <h1>Jace</h1>
            <a href="https://jace1971.herokuapp.com/" className="work-text-container">
              <p><span className="dark-font-color">E-commerce website. </span>App that allows users to order dishes online at restaurant, using table QR code tag, kitchen side orders board, user authentication and payment structure implemented.</p>
            </a>
            <ul className="work-skills">
              <li><a href="https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,MongoDB%20%E2%80%94%20document%20database" target="_blank" rel="noopener noreferrer">MERN</a></li>
              <li><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a></li>
              <li><a href="https://www.google.com/search?q=user+authentication&sxsrf=APwXEddm0LVCHmxmM5KD8oZWgrmxMQV2pA%3A1682533061179&ei=xWpJZMDPCqqdptQPrrW5yAM&ved=0ahUKEwiAxryLlMj-AhWqjokEHa5aDjkQ4dUDCBA&uact=5&oq=user+authentication&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIHCAAQigUQQzIFCAAQgAQyBwgAEIoFEEMyBwgAEIoFEEMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADSgQIQRgAUN0FWN0FYLMHaAFwAXgAgAFOiAFOkgEBMZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp#bsht=Cgdic2h3Y2hwEgQIBDAB" target="_blank" rel="noopener noreferrer">User Auth</a></li>
              <li><a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </section>
  )
}
