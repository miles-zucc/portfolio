import React from "react";

const Five = () => (
  <>
    <div className="project-title">
      <div>Development</div>
      <div>2019 — 2020</div>
    </div>

    <div className="image-container no-screenshot">
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/5/ko2.mp4" type="video/mp4" />
      </video>
      <video className="animated fadeIn" muted autoPlay loop>
        <source src="images/projects/5/ko1.mp4" type="video/mp4" />
      </video>
    </div>

    <div className="project-info">
      <div>Development</div>
      <div>2019 — 2020</div>

      <div className="project-description">
        Websites programmed for my role as Developer at La Colonia Studio. They
        use a Next.js + headless CMS setup.
        <br />
        <br />
        &#8599;{" "}
        <a href="https://karlaotto.com/" target="_blank">
          Karla Otto
        </a>
        <br />
        &#8599;{" "}
        <a href="https://patriciaurquiola.com/" target="_blank">
          Patricia Urquiola
        </a>
        <br />
        &#8599;{" "}
        <a href="https://lacolonia.studio/" target="_blank">
          View more at La Colonia
        </a>
      </div>
    </div>
  </>
);

export default Five;
