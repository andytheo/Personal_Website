import React from "react";
import ReactDOM from "react-dom";

import ProjectHome from "./ProjectHome";
import { NavLink } from "react-router-dom";

function ProjectsHome() {
  return (
    <div className="projects">
      <h1 className="section-header">Projects</h1>
      <div className="container">
        <ProjectHome
          img="../../../images/tnsda-home.png"
          name="TNSDA"
          desc="Website built using React.js and Java spring boot backend."
          btn1="View project"
          project="https://www.torontonigeriansda.org"
        />

        <ProjectHome
          img="../../../images/pecuty.png"
          name="Pecuty Royal Academy"
          desc="A school website. Built with React.js, Node.js and MongoDB Database."
          btn1="View project"
          project="https://pecutyroyalacademy.com/"
        />

        <NavLink to="/projects">
          <button style={{ marginLeft: "22px" }} className="btn btn-sm btn-outline-dark project-btn">
            See more projects
          </button>
        </NavLink>
      </div>
      <hr></hr>
    </div>
  );
}

export default ProjectsHome;
