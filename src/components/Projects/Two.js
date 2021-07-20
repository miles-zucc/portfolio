import React from "react";

const Two = () => (
  <>
    <div className="project-title">
      <div>2018</div>
      <div>Generative zine</div>
    </div>

    <div className="image-container no-screenshot">
      <img src="images/projects/2/zine1.png" data-src="images/projects/2/zine1.png" />
      <img src="images/projects/2/zine2.png" data-src="images/projects/2/zine2.png" />
    </div>

    <div className="project-info">
      <div>Generative zine</div>
      <div>2018</div>

      <div className="project-description">
        The zine examines Instagram as a potential form of autobiography and
        documentation of lives in parallel. The Instagram captions the founders
        of Dinamo Type are repurposed into placeholder text for type specimens.
        Using Python, I scraped the metadata from their profiles and used Markov
        Chains to generate new bodies of text. These were then imported into
        InDesign to create the specimen book.
      </div>
    </div>
  </>
);

export default Two;
