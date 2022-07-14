import React from 'react';
import ReactDOM from 'react-dom';

function Intro() {
  return(
    <main>
    <div className="intro">
    <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-12 col-lg-6">
    <div className="left">
    <h3 className="intro-greeting">Hello there</h3>
    <h1 className="intro-name">I'm Andrew</h1>
    <h1 className="intro-text type">Welcome to my site.</h1>

    </div>
    </div>

    <div className="col-sm-11 col-md-12 col-lg-6">
    <div className="right">
    <img className="intro-image" src="../../../images/Pngtree_adobespark.png" />
    </div>
    </div>
    </div>
    </div>

    </div>
    <a href="#profile"><div className="scrolldown">
      <span></span>
      <span></span>
      <span></span>
    </div></a>
    </main>
  )
}

export default Intro;
