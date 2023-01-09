import React from "react";
import ReactDOM from "react-dom";
import Nav from "../home/Nav";
import ProjectHome from "../home/ProjectHome";

function Projects() {
  return (
    <>
      <Nav />
      <div className="container">
        <div>
          <h3 className="section-header">Projects</h3>
        </div>

        <ProjectHome
          img="../../../images/tnsda-home.png"
          name="Toronto Nigerian Seventh-Day Adventist Church"
          desc="A website for a church organization built using React.js and Java spring boot backend."
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

        <ProjectHome
          img="../../../images/portfolio.png"
          name="Portfolio"
          desc="Get to know me through my portfolio which I built with React.js."
          btn1="View project"
          project="/"
          btn2="View code"
        />
      </div>
    </>
  );
}

export default Projects;
