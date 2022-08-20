import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = () => {
  return (
    <Carousel
      className="hero-banner-container"
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
          height="500"
          style={{ objectFit: "cover" }}
          src="/images/img-1.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="500"
          style={{ objectFit: "cover" }}
          src="/images/img-2.jpg"
        />
      </div>
      <div>
        <img
          width="100%"
          height="500"
          style={{ objectFit: "cover" }}
          src="/images/img-3.jpg"
        />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
