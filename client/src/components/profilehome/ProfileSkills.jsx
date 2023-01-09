import React from 'react';
import ReactDOM from 'react-dom';

function ProfileSkills() {
  return(
    <div data-aos="fade-right" className="container profile-skills">
    <div id="skills">
    <h5>Skills</h5>
    <ul>
    <li>Effective collaboration</li>
    <li>Superb communication skills</li>
    <li>Excellent problem solving skills</li>
    <li>Fast-learner</li>
    <li>Creativity</li>
    <li>Time management</li>
    <li>Detail-oriented</li>
    </ul>
    </div>
    <hr></hr>
    <div>
    <h5 id="tech">Languages & Frameworks</h5>
    <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>JQuery</li>
    <li>Node.js</li>
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Microsoft SQL</li>
    </ul>
    </div>
    <hr></hr>
    <div>
    <h5 id="hobbies">Hobbies</h5>
    <ul>
    <li>Programming</li>
    <li>Piano playing</li>
    <li>Guitar playing</li>
    <li>Chess</li>
    <li>Scrabble</li>
    <li>Swimming</li>
    </ul>
    </div>
    </div>
  )
}

export default ProfileSkills;
