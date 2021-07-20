import React from "react";

const Six = () => (
  <>
    <div className="project-title">
      <div>2014 — 2015</div>
      <div>Arrière-garde magazine</div>
    </div>

    <div className="image-container no-screenshot">
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/6/ag2.mp4" type="video/mp4" />
      </video>
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/6/ag1.mp4" type="video/mp4" />
      </video>
      <img src="images/projects/6/ag1.jpg" />
      <img src="images/projects/6/ag2.jpg" />
      <img src="images/projects/6/ag3.jpg" />
      <img src="images/projects/6/ag4.jpg" />
    </div>

    <div className="project-info">
      <div>Arrière-garde magazine</div>
      <div>2014 — 2015</div>

      <div className="project-description">
        Arrière-garde was an online magazine focused on art, culture,
        architecture and design. I founded it personally in 2014, developed the
        brand and identity, managed social media and marketing, and curated the
        articles.
      </div>
    </div>
  </>
);

export default Six;
