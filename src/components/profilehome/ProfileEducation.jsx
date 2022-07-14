import React from 'react';
import ReactDOM from 'react-dom';
import ProfileDetails from './ProfileDetails';

function ProfileEducation() {
  return (
    <div data-aos="fade-right">
    <h4 id="education" className="profile-bio-title">Education</h4>
    <ProfileDetails
    year="Jan 2022 - Present"
    title="PGCert., Computer Applications Development"
    school="Conestoga College"
    award="Developed an ecommerce application using Node.js and MongoDB"
    journal="Applying systems analysis and design concepts to build business applications"

    />
    <ProfileDetails
    year="Feb 2014 - Jul 2019"
    title="B.Eng Chemical Engineering"
    school="Niger Delta University"
    award="Awarded a competitive national undergraduate scholarship"
    journal="Co–authored a journal article on 'Design of an absorption column for the removal of Carbon-dioxide from natural gas using Selexol.'"

    />
    <hr></hr>
    </div>
  ) }

export default ProfileEducation;
