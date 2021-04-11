import React from "react";
import firstPage from "./images/firstPage.png";
import secondPage from "./images/secondPage.png";
import thirdPage from "./images/thirdPage.png";
import lastPage from "./images/lastPage.png";

export default function Work() {
  return (
    <div id="resume">
      <img src={firstPage} id="resume" alt="resume" />
      <img src={secondPage} id="resume" alt="resume" />
      <img src={thirdPage} id="resume" alt="resume" />
      <img src={lastPage} id="resume" alt="resume" />
    </div>
  );
}
