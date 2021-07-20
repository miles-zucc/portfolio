import React from "react";
import Panel from "./Panel";
import { carousel } from "../utils/data/carousel.json";

const Carousel = () => {
  return (
    <div className="center-page">
      <div id="perspective" className="animated fadeIn delay-1s">
        <div id="carousel">
          {carousel.map((item, index) => (
            <Panel key={index} id={index}>
              {item.type === "image" ? (
                <img className="jpg" alt="" src={item.src} />
              ) : item.type === "video" ? (
                <video className="jpg" muted autoPlay loop>
                  <source src={`${item.src}`} type="video/mp4" />
                </video>
              ) : null}
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
