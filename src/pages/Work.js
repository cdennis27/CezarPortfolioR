import React from 'react';
import Home from './Home';
import { HashRouter as Router } from 'react-router-dom';
import { Outlet, useParams } from 'react-router-dom';
import Charger73 from './Charger73';
import Contact from './Contact';

export default function Work() {

  let { id } = useParams();
  console.log("work");
  console.log(id);
  if (id === "27") {
    window.scroll({top:1000, left:0, behavior: "smooth"});
  }
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Charger73 />
      </div>
      <Contact />
    </div>
  )
}
