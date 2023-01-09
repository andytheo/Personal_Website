import React from 'react';
import ReactDOM from 'react-dom';

import ProfileLeft from './ProfileLeft';
import ProfileName from './ProfileName';
import ProfileBio from './ProfileBio';
import ProfileEducation from './ProfileEducation.jsx';
import ProfileWork from './ProfileWork';
import ProfileSkills from './ProfileSkills';

function ProfileMain() {
  return (
    <main>
    <div className="profile-home">
      <div className="row">
        <div className="col-3 col-lg-2 d-none d-sm-block d-md-block">
          <ProfileLeft />
        </div>
        <div className="col-12 col-sm-9 col-md-9 col-lg-9">
          <ProfileName />
          <ProfileBio />
          <ProfileEducation />
          <ProfileWork />
          <ProfileSkills />
        </div>
      </div>
    </div>
    </main>
  )
}

export default ProfileMain;
