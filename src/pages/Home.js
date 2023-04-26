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
        <div className="work-container-left">
          <a href="https://jace1971.herokuapp.com/"><img className="work-img" src={work1} alt="drawing of me" /></a>

        </div>
        <div className="work-container-right">
          <div className="work-tag">
            <h1>Jace</h1>
            <div className="work-text-container">
              <p><span className="dark-font-color">Focused</span> on building and maintenaing Hardware, Web Applications and Databases.Experienced in leading teams to complete projects on time and in budget.</p>
            </div>
            <ul className="work-skills">
              <li><a href="https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,MongoDB%20%E2%80%94%20document%20database" target="_blank">MERN</a></li>
              <li><a href="https://graphql.org/" target="_blank">GraphQL</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </section>
  )
}
