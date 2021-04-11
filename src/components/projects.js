import React from "react";
import ReactDOM from "react-dom";
import aerialVideo from "./video/aerialVideo.mp4";
const video = { src: aerialVideo, type: "video/mp4" };

export default function Project() {
  return (
    <div id="project">
      <h2>Projects </h2>

      <h3>
        <p>
          Why the name "Harbor Haven"? Lake Champlain is polluted. There are
          simple things that any household can do to reduce the pollution
          entering the lake. It can cost one a lot of money and end up with a lawn/garden that can be featured on <i>Better Homes and Garden.</i> Or one can actually save money and have a lawn (probably not a garden) and end up with a wilderness, beatiful in it's one right. 
        </p>
        I'm starting my own business after many years of similar work around the
        world. There are two terms that come to mind when it comes of my service; "Regenerative" and "zero-scaping". Most people have heard of the term Regenerative, usually associated with agriculture. OI have associated it with lawns, Regenerative Lawns. 
         I've taken some aerial videos of
        properties from masive Kentuky blue grass lawns to well manicured
        regenerative lawns to the "totally let go wild" lawns.
      </h3>

      <div id="myvideo">
        <video width="480" height="360" controls>
          <source src="./video/aerialVideo.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>

    // <div id = "ProjNav">
    //     <div id="proj-links" to={"/projects"}
    // </div>
  );
}
