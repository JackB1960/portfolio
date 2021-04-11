import React from "react";
import heron from "./images/heron.jpg";

export default function Home() {
  return (
    <div id="photo">
      <image img src={heron} id="image.jpg" alt="Blue" />
      <h3>A Blue Geron</h3>
    </div>
  );
}
