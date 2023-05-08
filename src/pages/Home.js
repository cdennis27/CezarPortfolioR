import React, { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import myDrawing from '../assets/images/myDrawing.gif';
import work1 from '../assets/images/jaceScreenshot.jpg';
import work2 from '../assets/images/CardealerappScreenshot.jpg';
import work3 from '../assets/images/Weatherapphomepage.jpg';
import work4 from '../assets/images/webdevBlog.jpg';
import projectList from '../assets/files/projectList.json';

export default function Home() {

  const object = projectList.project;
  console.log(object);
  console.log(object.map((item, index) => {
    return (
      item.name

    )
  }
  ));
  const [projects, setGroup] = useState(object);
  console.log(`Projects: ${projects}`);
  //reference only below
  const images = { image: work1, image: work2, image: work3, image: work4 };
  // just for testing below
  const webLink = projects.map((item, index) => {
    return (
      item.work
    )
  });
  console.log(webLink);
  //
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
          <h1>About me</h1>
          <p id="initial">Hi, my name is Cezar Amaral.</p>
          <p>Since beginning my journey as Software Engineer, I have been working in the automotive and manufacturing business, managing projects, and intermittently working with software and hardware, after a WebDev bootcamp I decided to focus on Software development and have been working with marketing campaigns, work-flow apps and websites.
          </p>
          <p>
            <a id="no-style" href={`#/about/7`}> More...</a>
          </p>
        </div>
        <a href={`#/about/7`} className="home-banner-about-right">
          <div className="home-skills">
            <h2 className="skills">my skills</h2>
            <h2 className="skills-right"><p className='oval'></p></h2>
          </div>
          <div className="home-list-skills">
            <li className="home-list-skills-item">SaaS</li>
            <li className="home-list-skills-item">GA4</li>
            <li className="home-list-skills-item">Node.JS</li>
            <li className="home-list-skills-item">React</li>
            <li className="home-list-skills-item">Express</li>
            <li className="home-list-skills-item">C++</li>
            <li className="home-list-skills-item">Python</li>
            <li className="home-list-skills-item">MySQL</li>
            <li className="home-list-skills-item">MongoDB</li>
            <li className="home-list-skills-item">MVC</li>
            <li className="home-list-skills-item">MERN</li>
            <li className="home-list-skills-item">Handlebars</li>
            <li className="home-list-skills-item">SMM</li>
            <li className="home-list-skills-item">JSON</li>
            <li className="home-list-skills-item">Arduino</li>
            <li className="home-list-skills-item">Git</li>
            <li className="home-list-skills-item">GraphQL</li>
            <li className="home-list-skills-item">PWA</li>
            <li className="home-list-skills-item">AWS</li>
            <li className="home-list-skills-item">Agile</li>


          </div>
        </a>
      </div>
      <div name="work" className="home-subtitle">
        Recent Work
      </div>
      <section>

        {projects.map((item, index) => {

          return (
            <div key={index} className="work-container">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-container-left">
                <img className="work-img" src={item.image} alt={item.alt} />
                <div className="work-overlay"></div>
              </a>
              <div className="work-container-right">
                <div className="work-tag">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className='work-item-title'>{item.name}</a>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="work-text-container">
                    <p><span className="dark-font-color">{item.descriptionTitle} </span>{item.description}</p>
                  </a>
                  <ul className="work-skills">
                    {item.listAssets.map((item, index) => {

                      return (
                        <li key={index}><a href={item.listLink} target="_blank" rel="noopener noreferrer">{item.listSkill}</a></li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}


      </section>

      <Outlet />


    </section>
  )
}
