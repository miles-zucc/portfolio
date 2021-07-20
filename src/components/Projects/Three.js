import React from "react";

const Three = () => (
  <>
    <div className="project-title">
      <div>2018</div>
      <div>YouCube</div>
    </div>

    <div className="image-container">
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/3/youcube.mp4" type="video/mp4" />
      </video>
      <img src="images/projects/3/img6.jpg" data-src="images/projects/3/img6.jpg" />
    </div>

    <div className="project-info">
      <div>YouCube</div>
      <div>2018</div>

      <div className="project-description">
        YouCube is a microcontroller which generates Youtube mashups, exploring
        different dimensions of contemporary culture. The cube is controlled by
        a Sparkfun ESP32 Thing board covered in touch capacitive IoT sensors,
        enabled by an Adafruit MPR121 board. The cube triggers a visual-audio
        experience for the viewer by making calls to the Youtube API from an
        Express.js backend server, based on which sensors are touched. <br />
        <br />
        &#8599;{" "}
        <a href="https://github.com/milenazuccarelli/youcube" target="_blank">
          View on Github
        </a>
      </div>
    </div>
  </>
);

export default Three;
