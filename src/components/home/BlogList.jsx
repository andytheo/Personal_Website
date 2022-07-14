import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

function BlogList(props) {
  return (
    <div data-aos="fade-right" className="card">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text"><small className="text-muted">{props.date}</small></p>
        <NavLink to={props.link}><button className="btn btn-outline-dark" type="button">Read</button></NavLink>
      </div>
    </div>
  )
}

export default BlogList;
