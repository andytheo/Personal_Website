import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/home/Nav';
import Intro from './components/home/Intro';
import Profile from './components/home/Profile';
import ProjectsHome from './components/home/ProjectsHome';
import Blog from './components/home/Blog';
import Icons from './components/home/Icons';


function Home() {
  return (
    <div>
    <Nav />
    <Intro />
    <Profile />
    <ProjectsHome />
    <Blog />
    <Icons />
    </div>
  )
}

export default Home;
