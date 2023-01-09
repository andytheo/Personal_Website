import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to='/' className="navbar-brand" href="/"><img className="logo" src="../../../images/drewity-logo.png" /></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item list">
        <NavLink to='/profile' className="nav-link">Profile</NavLink>
      </li>
      <li className="nav-item list">
        <NavLink to='/projects' className="nav-link">Projects</NavLink>
      </li>
      <li className="nav-item list">
        <NavLink to='/blog' className="nav-link">Blog</NavLink>
      </li>
      <li className="nav-item list">
        <NavLink to='/contact' className="nav-link">Contact</NavLink>
      </li>
    </ul>
  </div>
</nav>
</div>);
}

export default Nav;
