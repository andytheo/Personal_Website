import React from 'react';
import ReactDOM from 'react-dom';


function ProjectHome(props) {
  return (
    <div className="row project-class">
    <div className="col-sm-7 col-md-7 col-lg-6">
    <img data-aos="fade-in" className="project-img" src={props.img} alt="project-image" />
    </div>
    <div data-aos="fade-in" className="col-sm-5 col-md-4 col-lg-4 project-description">
    <p><b>{props.name}</b></p>
    <p>{props.desc}</p>
    <a href={props.project} target="_blank"><button className="btn btn-sm btn-outline-dark">{props.btn1}</button></a>
    </div>
    </div>
  )
}


export default ProjectHome;
