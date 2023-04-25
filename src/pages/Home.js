import React from 'react'
import { Outlet } from 'react-router-dom';
import myDrawing from '../assets/images/myDrawing.gif';

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
            <li className="home-list-skills-item">MongoDB</li>
            <li className="home-list-skills-item">MySQL</li>
            <li className="home-list-skills-item">Python</li>
            <li className="home-list-skills-item">C++</li>
            <li className="home-list-skills-item">C#</li>
            <li className="home-list-skills-item">Java</li>
            <li className="home-list-skills-item">PHP</li>
            <li className="home-list-skills-item">Linux</li>
            <li className="home-list-skills-item">Windows</li>
            <li className="home-list-skills-item">Git</li>
            <li className="home-list-skills-item">Docker</li>
            <li className="home-list-skills-item">Kubernetes</li>
            <li className="home-list-skills-item">AWS</li>
            <li className="home-list-skills-item">Azure</li>


          </div>
        </a>
      </div>

      <Outlet />
    </section>
  )
}
