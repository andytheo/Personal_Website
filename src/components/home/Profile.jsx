import React from "react";
import ReactDom from "react-dom";
import { NavLink } from 'react-router-dom';

function Profile() {

  return (
  <div id="profile" className="profile">
  <h1 className="profile-head">Profile</h1>
  <div className="container">
  <div className="row">

  <div className="col-sm-12 col-md-6 col-lg-6" data-aos="fade-right"    data-aos-duration="4000">
  <div className="profile-left">
  <img className="profile-image" src="../../../images/Andy_w1.jpg" />
  </div>
  </div>

  <div className="col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
  <div className="profile-right">
  <p className="profile-text">I'm Andrew Igbeinkutu, a <span className="fullstack">Fullstack</span> Web developer.
  I love to code and build amazing things on the web.</p>
  <NavLink to="/profile"><button className="btn btn-outline-dark profile-btn" type="button">See more about me</button></NavLink>
  </div>
  </div>

  </div>
  </div>
  <hr></hr>
  </div>
  )
}

export default Profile;
