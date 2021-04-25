//Believe it or no, I had a beautiful resume on this site...============
// I tried nearly everything to get it rendered but OH Well, ran out of time==
// Never used the reactDOM import...============
import React from "react";


// Importing locally ====================================
import firstPage2 from "./images/firstPage2.jpg";
import firstPage from "./components/images/firstPage.PNG";
import secondPage from "./images/secondPage.JPG";
import thirdPage from "./images/thirdPage.JPG";
import lastPage from "./images/lastPage.JPG";
import footBed from "./images/footBed.JPG"
import littleBoats from "./images/littleBoats.PNG"

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
        <img src ={firstPage2} alt="jack"></img>
        <img src ={firstPage} alt="jack"></img>
        <img src ={secondPage} alt="jack"></img>
        <img src ={thirdPage}  alt="jack"></img>
        <img src ={lastPage}  alt="jack"></img>
        <img src={littleBoats} alt="blue"></img>
      </div>
    </div>
  );
}
