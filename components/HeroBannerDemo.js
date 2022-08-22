import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <div className="hero-carousel-container">
      <Carousel
        className="herobanner"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        //   width={1500}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://picsum.photos/1920/700"
          />
        </div>
        <div>
          <img
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://picsum.photos/1920/700"
          />
        </div>
        <div>
          <img
            width="100%"
            style={{ objectFit: "cover" }}
            src="https://picsum.photos/1920/700"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
