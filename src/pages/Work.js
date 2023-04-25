import React from 'react';
import Home from './Home';
import { HashRouter as Router } from 'react-router-dom';
import { Outlet, useParams } from 'react-router-dom';

export default function Work() {

  let { id } = useParams();
  debugger;
  console.log(id);
  if (id === "27") {
    window.scrollTo(0, 500);
  } 
  return (
    
      <Home />
    
  )
}
