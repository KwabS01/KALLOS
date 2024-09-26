import React from "react";
import heroImage from "../assets/hero.jpg"; // Path relative to src folder

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
    </div>
  );
};

export default Hero;
