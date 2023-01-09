import React from 'react';
import ReactDOM from 'react-dom';
import ProfileDetails from './ProfileDetails';

function ProfileWork() {
  return (
    <div id="work" data-aos="fade-right">

    
  <div className="container">
    <div className="row">
      <div className="col-4 col-lg-3">
        <p className="profile-detail">Sep - Dec 2021</p>
      </div>
      <div className="col-8 col-lg-9">
        <p>Software Developer</p>
        <p className="title-detail">Xao and Xig LLC<i></i></p>
        <li className="profile-year">Developed a live website for a real estate company</li>
        <li  className="profile-year">Collaborated effectively with my team to translate client’s ideation into a realistic software using latest technologies</li>
        <li className="profile-year">Built a solid backend with Node.js and a secure MongoDB database</li>
        <li className="profile-year">Implemented reliable payment platforms such as Flutterwave and Paystack</li>
        <li className="profile-year">Performed software quality testing and deployed the web application</li>
      </div>
    </div>
</div>

    <h5 className="profile-bio-title">Work Experience</h5>
    <ProfileDetails
    year="Jan 2021 - Present"
    title="Freelancer"
    school="Freelance Web development"
    award="Built my portfolio website using React.js"
    journal="Built a web application that helps users report incidents. Used Node.js and MongoDB."
    />

    <hr></hr>
    </div>
  )
}

export default ProfileWork;
