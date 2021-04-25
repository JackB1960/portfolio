//imports
import React from "react";
import { Link } from "react-router-dom";
import lakeView from "./images/lakeView.JPG";


export default function headerNav() {
  return (
    <div id="header-container">
       <img src={lakeView} id="headerBackground" alt="Blue"></img>

      <div id="home-link">
        <Link id="header-links" to={"/home"}>
          <h3>Jack Brooks'</h3>
          <h5>Harbor Haven, LLC</h5>
        </Link>
      </div>

      <div id="page-nav">
        <Link id="header-links" to={"/about"}>
          About
        </Link>

        <Link id="header-links" to={"/services"}>
          Services
        </Link>

        <Link id="header-links" to={"/projects"}>
          Projects
        </Link>

        <Link id="header-links" to={"/storyline"}>
          Story Line
        </Link>
      </div>
    </div>
  );
}
