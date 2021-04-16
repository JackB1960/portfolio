//Believe it or no, I had a beautiful resume on this site...============
// I tried nearly everything to get it rendered but OH Well, ran out of time==
// Never used the reactDOM import...============
import React from "react";
import ReactDOM from "react-dom";

// Importing locally ====================================
import firstPage2 from "./images/firstPage2.jpg";
import firstPage from "./images/firstPage.JPG";
import secondPage from "./images/secondPage.JPG";
import thirdPage from "./images/thirdPage.JPG";
import lastPage from "./images/lastPage.JPG";
import footBed from "./images/footBed.JPG";

//============ I could get the img of the footboard to show, but not the resume.At one time I had it rendering beatifully...====
//===========the function that renders this page ================
export default function Experience() {
  return (
    <div id="expWrapper">
      <div id="footBoard">
        <img id="footBoard" src={footBed} alt="Blue"></img>
      </div>
      <h2>Resume</h2>

      {/* ================== Now to put the imports from above where they belong on this page, unfortunatley they never showed up. I believe it has smethingto do with howw the image swere downloaded  =============== */}

      <div id="resumeContainer">
        <img src={firstPage2} id="resume" alt="resume"></img>
        <img src={firstPage} id="resume" alt="resume"></img>
        <img src={secondPage} id="resume" alt="resume"></img>
        <img src={thirdPage} id="resume" alt="resume"></img>
        <img src={lastPage} id="resume" alt="resume"></img>
      </div>
    </div>
  );
}
