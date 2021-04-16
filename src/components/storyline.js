import React from "react";

import headFoot from "./images/headFoot.JPG";
import footBed from "./images/footBed.JPG";

export default function Storyline() {
  return (
    //  this is the story of me but my wife didn't have the time to write anything and I can't write about myself

    <div id="storyline">
      <h2>Storyline</h2>
      <h2> This is Jack as seen by his wife and children</h2>
      <h4>Why do we use it?</h4>
      <h4>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humor and the like). <p>Where can
        I get some? </p>
        
        {/*===I stuck a photo here to save a spot for something more=======  */}
        <div id = "footBoard">
          <img id="footBoard" src={footBed} alt="Blue"></img>
        </div>
        <p>
          <i>This is one of the beds I made from logs taken from my work. 
          The logs are maple and were sustainably harvested. Note the charatertisics of each and every piece.</i>
        </p>
        {/*==========This is going to eventually be my website fr my business, I'll be selling stuff made from logs and landshaping lawns for pollinators. more filler stuff here  */}
       <h4> 
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose <p>(injected humor and the like).Where can
        I get some? </p>
        </h4> 
        {/* ==I'd like to sell this bed for $1,200, the photo above is the item on the left*/}
        <div id = "foot">
          <img id="footBoard" src={headFoot} alt="Blue"></img>
        </div>
        <i>This is the foot of the Bed.</i>
      </h4>
    </div>
  );
}
