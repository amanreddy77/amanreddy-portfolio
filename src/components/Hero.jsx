import React, { useRef } from "react";
import "./Hero.scss";
import { SecondaryBtn } from "./Btn";

const Hero = () => {
  const scrollToRef = useRef(null);

  const handleLearnMoreClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="text">
          <h1>
            Full-Stack <br /> Developer
          </h1>
          <div className="text-desc">
            <p className="typing-effect">
              Hi, my name is Aman, I'm a Web Developer
            </p>
            <SecondaryBtn text={"Learn more"} onClick={handleLearnMoreClick} classText="btn-s-90" />
          </div>
        </div>
        <div ref={scrollToRef} className="scroll-target">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
