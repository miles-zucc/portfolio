import React from "react";

const Zero = () => (
  <>
    <div className="project-title">
      <div>2015 — present</div>
      <div>Personal research</div>
    </div>
    <div className="image-container">
      <img
        src="images/projects/0/diptych.jpg"
        data-src="images/projects/0/diptych.jpg"
      />
    </div>
    <div className="image-container no-screenshot">
      <img src="images/projects/0/3d.jpg" data-src="images/projects/0/3d.jpg" />
    </div>
    <br /> <br />
    <div className="project-title margin-top">
      <div>Poetics of the Open (Source) Work</div>
      <div>2018</div>
    </div>
    <div className="image-container">
      <video className="animated fadeIn video-sound" muted autoPlay loop>
        <source src="images/projects/0/poetics.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="project-title margin-top">
      <div>Soundscapes</div>
      <div>2017</div>
    </div>
    <video className="animated fadeIn" muted autoPlay loop>
      <source src="images/projects/0/cloudscape.mp4" type="video/mp4" />
    </video>
    <video className="animated fadeIn video-sound" muted autoPlay loop>
      <source src="images/projects/0/soundscape.mp4" type="video/mp4" />
    </video>
    <div className="project-info">
      <div>Personal research</div>
      <div>
        2015 —<br />
        present
      </div>

      <div className="project-description">
        (Fig. 1 — 3)
        <br />
        A collection of personal experiments in graphics and creative code, as a
        means to practice visual stream of consciousness, creativity (a doodle a
        day keeps the creative rut away) and discipline. It is also a diary of
        different phases of my life, ideas and personal development.
        <br />
        <br />
        &#8599;{" "}
        <a href="https://milenazuccarelli.tumblr.com" target="_blank">
          View a few here
        </a>
        <br /> <br />
        (Fig. 4)
        <br />
        An infinitely looping audio-visual desktop and mobile application, based
        around the concepts of the open work, or work in movement described by
        Umberto Eco in his essay “The Poetics of the Open Work”.
        <br />
        <br />
        It is based on the idea of providing a strict framework, which within
        itself still allows a certain amount interactivity and movement. The
        framework (within the specific limits of a given taste, or of
        predetermined formal tendencies) provides an overarching theme. The
        work, once interacted with, will never be the same on different
        occasions, yet never all too different: “They are to be seen as the
        actualization of a series of consequences whose premises are firmly
        rooted in the original data provided by the author.”
        <br />
        <br /> “We see it as the end product of an author's effort to arrange a
        sequence of communicative effects in such a way that each individual
        addressee can refashion the original composition devised by the author.
        The addressee is bound to enter into an interplay of stimulus and
        response which depends on his unique capacity for sensitive reception of
        the piece.”
        <br />
        <br />
        &#8599;{" "}
        <a href="https://github.com/milenazuccarelli" target="_blank">
          Source code published on Github.
        </a>
        <br /> <br />
        (Fig. 5 — 6)
        <br />
        Virtual reality meets sound within the browser. I created this digital
        experience to orchestrate soundscapes through vision and locomotion
        within VR.
      </div>
    </div>
  </>
);

export default Zero;
