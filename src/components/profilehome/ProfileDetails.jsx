import React from 'react';
import ReactDOM from 'react-dom';

function ProfileDetails(props) {
  return (
  <div className="container">
<div className="row">
  <div className="col-4 col-lg-3">
  <p className="profile-detail">{props.year}</p>
  </div>
  <div className="col-8 col-lg-9">
  <p>{props.title}</p>
  <p className="title-detail"><i>{props.school}</i></p>
  <li className="profile-year">{props.award}</li>
  <li  className="profile-year">{props.journal}</li>
  </div>
</div>
</div>
  )
}

export default ProfileDetails;
