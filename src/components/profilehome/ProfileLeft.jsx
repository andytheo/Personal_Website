import React from 'react';
import ReactDOM from 'react-dom';

function ProfileLeft() {
  return (
    <ul data-aos="fade-right" className="profilehome-left">
    <li className="left-list"><a href="#name">Name</a></li>
    <li className="left-list"><a href="#bio">Bio</a></li>
    <li className="left-list"><a href="#education">Education</a></li>
    <li className="left-list"><a href="#work">Work Experience</a></li>
    <li className="left-list"><a href="#skills">Skills</a></li>
    <li className="left-list"><a href="#tech">Languages</a></li>
    <li className="left-list"><a href="#hobbies">Hobbies</a></li>
    </ul>
  )
}

export default ProfileLeft;
