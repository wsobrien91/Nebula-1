import React from "react";
import "./LandingPage.css";
import man from "../../pics/spaceman.png";
import anime from "animejs/lib/anime.es.js";
// import {wiggle} from '../../utils/animations.js'

function LandingPage() {
  anime({
    targets: ".man",
    translateX: 200,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    duration: 50000,
  });
  // wiggle("div")

  return (
    <>
      <div className="body">
        <h1>NEBULA</h1>
        <img
          className="man"
          src={man}
          alt="space man"
          width="300"
          height="300"
        />
      </div>
    </>
  );
}

export default LandingPage;
