import React from "react";
import aerialVideo from "./video/aerialVideo.mp4";


//========One import globally, one local, then the page. it'll fill up quickly ============ 
export default function services() {
  return (

    <div id="services">
       <h2>sevices</h2>
       <h3>Here I'll show and tell what I can do, Lots of img and videos</h3>
       <div id="myvideo">
        <video src={aerialVideo} width="480" height="360" controls></video>
      </div>
    </div> 
  );
}
