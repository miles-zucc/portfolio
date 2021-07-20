import React from "react";

const Four = () => (
  <>
    <div className="project-title">
      <div>2018</div>
      <div>Hunts</div>
    </div>

    <div className="image-container no-screenshot">
      <img
        data-src="images/projects/4/hunts2.jpg"
        src="images/projects/4/hunts2.jpg"
      />
      <video
        style={{ width: "49%" }}
        className="animated fadeIn"
        muted
        autoPlay
        loop
      >
        <source src="images/projects/4/chair1.mp4" type="video/mp4" />
      </video>
      <video
        style={{ width: "49%" }}
        className="animated fadeIn"
        muted
        autoPlay
        loop
      >
        <source src="images/projects/4/chair2.mp4" type="video/mp4" />
      </video>
      <img
        data-src="images/projects/4/hunts1.jpg"
        src="images/projects/4/hunts1.jpg"
      />
      <img
        data-src="images/projects/4/hunts3.jpg"
        src="images/projects/4/hunts3.jpg"
      />
      <img
        data-src="images/projects/4/hunts4.jpg"
        src="images/projects/4/hunts4.jpg"
      />
      <img
        data-src="images/projects/4/hunts6.jpg"
        src="images/projects/4/hunts6.jpg"
      />
      <img
        data-src="images/projects/4/hunts8.jpg"
        src="images/projects/4/hunts8.jpg"
      />
    </div>

    <div className="project-info">
      <div>Hunts</div>
      <div>2018</div>

      <div className="project-description">
        Hunts Office is the largest furniture showroom in the U.K. As part of an
        internship at Graphical House, Glasgow, I designed the website on a
        strict grid to reflect the brand’s ethos, complete with a particular
        emphasis on transitions and subtle animations throughout. The tools used
        were Sketch, InvisionApp, Tachyons, Craftyons, Javacript, Animate.css,
        CSS3 animations.
      </div>
    </div>
  </>
);

export default Four;
