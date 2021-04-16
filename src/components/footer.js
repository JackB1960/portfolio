// ==== required when using react+++++++++++
import React from "react";

// The normal function to render the page, you see this at the bottom of every page ====
export default function Footer() {
  return (
    <div id="subtitle">
      <div id="inputsContainer">
      <div id="name-email">
        <input id="name" class="inputs" type="text" placeholder="Name" />
        <input id="email" class="inputs" type="text" placeholder="email" />
      </div>
      <div id="messageContainer">
        <textarea id="message" class="inputs" placeholder="message"></textarea>
      </div>
    </div>
    <h3>If you would like to sign up for please fill out the form to the left, Thank you and enjoy the lake.</h3>
    </div>
  );
}

