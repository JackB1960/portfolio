import React from "react";
import aerialVideo from "./video/aerialVideo.mp4";
// the typical two imports, top is globally, second is local==========

// The fuction that starts the page off and showing
export default function Project() {
  return (
    <div id="project">
      <h2>Projects </h2>

      <h3>
        I'm starting my own business after many years of similar work around the
        world. There are two terms that come to mind when it comes of my
        service; "Regenerative" and "zero-scaping". Most people have heard of
        the term Regenerative, usually associated with agriculture. OI have
        associated it with lawns, Regenerative Lawns. I've taken some aerial
        videos of properties from masive Kentuky blue grass lawns to well
        manicured regenerative lawns to the "totally let go wild" lawns.
      </h3>
{/* This video is making the rounds */}
      <div id="myvideo">
        <video src={aerialVideo} width="480" height="360" controls></video>
      </div>
      <h4>Aerial View of Property (Will be replaced with better quality)</h4>
    </div>
  );
}
