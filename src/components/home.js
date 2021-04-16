import React from "react";
import aerialVideo from "./video/aerialVideo.mp4";
// the typical two imports, top is globally, second is local==========

// The fuction that starts the page off and showing
export default function Project() {
  return (
    // ==this return ties every thing together on this page

    // This next div ties the text and video to the id "project", the next div gives the video another id to call upon "myvideo" so that one can have more control
    <div id="project">
      <h3>
        I'm starting my own business after many years of similar work around the
        world. There are two terms that come to mind when it comes of my
        service; "Regenerative" and "zero-scaping". Most people have heard of
        the term Regenerative, usually associated with agriculture. OI have
        associated it with lawns, Regenerative Lawns. I've taken some aerial
        videos of properties from masive Kentuky blue grass lawns to well
        manicured regenerative lawns to the "totally let go wild" lawns.
      </h3>
      
      {/* This v ideo is very popular */}
      <div id="myvideo">
        <video src={aerialVideo} width="480" height="360" controls></video>
      </div>
      <h3>I will take a drone over your property</h3>
    </div>
  );
}
