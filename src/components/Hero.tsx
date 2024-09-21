import React from "react";
import "./hero.scss"; // We'll create this file for custom styles
import BACKGROUND from "./../assets/image/hero/hero-background.png";
// import RIGHTTOP from "./../assets/image/hero/hero-right.png";
import HERO from "./../assets/image/hero/right-bg.svg";
// import CENTER from "./../assets/image/hero/hero-center.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <img src={BACKGROUND} alt="hero" className="background-image" />
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-7 text-content hero-bg1 mb-3">
            <div className="container px-md-5">
              <h1>
                Host your meeting with world-class amenities. Starting at{" "}
                <span className="price">₹199/-!</span>
              </h1>
            </div>
          </div>
          <div className="col-md-5 image-content hero-bg2 mb-3">
            {/* <img src={CENTER} alt="center" className="cream-shape" /> */}
            <img
              src={HERO}
              alt="Office illustration"
              className="office-illustration"
            />
            {/* <img src={RIGHTTOP} alt="right top" className="hexagon-shape" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
