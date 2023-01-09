import React from 'react';
import ReactDOM from 'react-dom';

function ProfileName() {
  return(
    <div data-aos="fade-right" className="container">
  <div className="row">
    <div className="col-8 profile-name">
      <h3>Andrew Igbeinkutu</h3>
      <p>Web developer</p>
    </div>
    <div className="col-4">
      <img className="profile-name-img" src="../../../images/Andy_w1.jpg" />
    </div>
  </div>
  <hr></hr>
</div>
  )
}

export default ProfileName;
