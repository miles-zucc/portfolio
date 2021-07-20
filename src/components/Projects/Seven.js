import React from "react";

const Seven = () => (
  <>
    <div className="project-title">
      <div>2017 — 2018</div>
      <div>
        Azione nello Spazio
        <br />
        Virtual Reality
      </div>
    </div>

    <div className="image-container no-screenshot">
      <img src="images/projects/7/cyber1.jpg" />
      <img src="images/projects/7/cyber2.jpg" />
      <img src="images/projects/7/cyber3.jpg" />
      <img src="images/projects/7/cyber4.jpg" />

      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/7/cyber1.mp4" type="video/mp4" />
      </video>
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/7/cyber2.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="project-info">
      <div>
        Azione nello Spazio
        <br />
        in Virtual Reality
      </div>
      <div>2017 — 2018</div>

      <div className="project-description">
        Interactive web experience and Virtual Reality space which breaks
        outside of the the 2d context within which we experience a web page. It
        allows the viewer to navigate through the space of the page, the text
        and images and interact with it immersively, with a diseregard to
        structural hierarchy. It configures itself as a post-modern
        deconstruction of websites and an interactive experience to experience
        them from new perspectives. The use of Web VR within the project allowed
        users to partake in the experience from any device or browser, even
        though it is specifically developed for the Oculus Rift.
      </div>
    </div>
  </>
);

export default Seven;
