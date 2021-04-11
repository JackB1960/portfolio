//imports
import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  return (
    <div id="header-container">
      <div id="home-link">
        <Link id="header-links" to={"/home"}>
          <h1>Jack Brooks'</h1>
          <h3>Harbor Haven, LLC</h3>
        </Link>
      </div>
      <div id="page-nav">
        <Link id="header-links" to={"/about"}>
          Story Line
        </Link>
        <Link id="header-links" to={"/work"}>
          Experince
        </Link>
        <Link id="header-links" to={"/projects"}>
          Projects
        </Link>
      </div>
    </div>
  );
}
